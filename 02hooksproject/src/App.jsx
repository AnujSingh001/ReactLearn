import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   let [counter, setcounter] = useState(0)
//   function addvalue(){
//     counter= counter + 1
//     setcounter(counter)
    
//   }

//   function removeValue(){
//     counter = counter - 1
//     setcounter(counter)
//   }

//   return (
//     <>
//       <h1>Hello chai react</h1>
//       <h2>counter value : {counter}</h2>
//       <button onClick={addvalue}>Add value</button>
//       <br />
//       <button onClick={removeValue}>remove value</button>
//     </>
//   )
// }

function App(){
  let [value, setValue] = useState(9) 
  const upHandler = ()=>{
    if(value >=20){
      setValue(value)
    }else{
      setValue(value + 1)
    }
    
    console.log(value)
  }
  const downHandler = ()=>{
    if(value <= 0){
      setValue(value)
    }else{
      setValue(value-1)
    }
    
    
    console.log(value)
  }

  return (
    <>
      <h1>just fun Increse and decrease value</h1>
      <h2>Value is : {value}</h2>
      <button onClick={upHandler}>up</button>
      <br />
      <button onClick={downHandler}>down</button>
    </>
  )
}

export default App
