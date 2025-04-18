import React from 'react'
import {FaSignOutAlt } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex items-center justify-between'>
        <h1>Dashboard</h1>
        <div className='flex space-x-3 justify-center items-center'>
        <FaSignOutAlt/>
        <span>LogOut</span>
        </div>
    </div>
  )
}

export default Navbar