import React from 'react'
import {FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-indigo-500 border-b border-gray-300 p-4 flex items-center justify-between'>
        <h1 className='font-bold'>Dashboard</h1>
        <div className='flex space-x-3 justify-center items-center'>
        <FaUser className='mr-5'/>
        <FaSignOutAlt/>
        <Link to='/login' className="text-black font-bold">Login</Link>
        </div>
    </div>
  )
}

export default Navbar