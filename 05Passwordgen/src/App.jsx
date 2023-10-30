import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null)

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "1234567890";
    if(charAllowed) str+= "!@#$%^&*()";

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  },[length, numberAllowed, charAllowed,setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenrator()
  },[length, numberAllowed, charAllowed, setpassword, passwordGenrator])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
        <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
           />
          
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 bg-sky-500 hover:bg-sky-700'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range"
            min={2}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}

             />
             <label htmlFor="">Length : {length}</label>
          </div>
          <div className='flex item-center gap-x-1 mx-2'>
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={(e)=>{setNumberAllowed((prev) => !prev)}}
            />
            <label htmlFor="">Number</label>

          </div>
          <div className='flex item-center gap-x-1 mx-2'>
            <input 
            type="checkbox" 
            defaultChecked = {charAllowed}
            id='charInput'
            onChange={(e)=>{setCharAllowed((prev) => !prev)}}
            />
            <label htmlFor="">Charactor</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
