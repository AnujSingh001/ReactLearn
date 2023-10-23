import React from "react";
import  Container  from "../Container/Container";
import Logo from '../Logo'
import Logoutbtn from "./Logoutbtn";
import {Link} from 'react-router-dom'
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header(){
    const authStatus = useSelector((state) => {
        state.auth.status
    })
    return (
        <div>Header</div>
    )
}

export default Header