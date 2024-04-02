import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className=' flex justify-center items-center m-4 p-4 text-2xl bg-gray-400 rounded-lg'>User: {userid} </div>
    )
}

export default User