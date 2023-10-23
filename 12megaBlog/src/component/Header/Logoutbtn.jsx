import React from "react";
import {useDispatch} from 'react-redux'
import authService from '../../appWrite/auth/authService'
import {logout} from '../../store/authSlice'

function Logoutbtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }


    return (
        <button className="inline-block  px-6 py-2 duration-20 hover:bg-blue-100 rounded-full">Button</button>
    )
}

export default Logoutbtn