import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  function addvalue(){
    counter= counter + 1
    setcounter(counter)
    
  }

  function removeValue(){
    counter = counter - 1
    setcounter(counter)
  }

  return (
    <>
      <h1>Hello chai react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
