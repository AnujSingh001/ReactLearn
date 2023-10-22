import {React, useState, useEffect, useDispatch } from 'react'
import './App.css'
import authService from './appWrite/auth'
import  Header  from './component/Header/Header'
import Footer from './component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch

  useEffect(()=>{

  },[])


  return loading ? (
  <div className='bg-gray-600 flex flex-wrap content-between min-h-sh'>
    <div className='w-full block'>
      <Header/>
      <main>
        Todo:{/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div>):null
}

export default App
