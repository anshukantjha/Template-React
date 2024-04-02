import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect ( ()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])

    return (
        <div className='text-center m-4 bg-gray-400 p-4 text-3xl text-white'>Github Followers:{data.followers}
            <img className='mx-auto rounded-xl' src={data.avatar_url} alt="Profile" width={344} />
        </div>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}