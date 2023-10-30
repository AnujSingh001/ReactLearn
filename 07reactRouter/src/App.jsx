import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-600 p-4'>React Routers</h1>
     <Home/>
    </>
  )
}

export default App
