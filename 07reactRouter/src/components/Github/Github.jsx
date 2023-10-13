import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AnujSingh001')
    //     .then(res => res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
        
    // },[])

    return(
        <>
            <div className="text-2xl bg-gray-600 p-4 text-white">Github Follwer :{data.followers} </div>
            <img src={data.avatar_url} alt="git Picture" width="300px" className="rounded-3xl" />
        </>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const respose = await fetch('https://api.github.com/users/AnujSingh001')
    return respose.json()
}