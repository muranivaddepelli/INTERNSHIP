import React from 'react';
import {FaBox, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers,FaCog} from 'react-icons/fa'

function Sidebar(){
  return (
    <div className='bg-gradient-to-br from-blue-700 to-white text-gray-900 h-screen px-2 md:px-4  fixed top-0 left-0  w-16 md:w-64 border-r border-gray-500 z-10' >
      <h1 className='text-2xl font-bold hidden md:block italic mt-4 text-center'>CWY SHOP</h1>
      <ul className='flex flex-col mt-5 text-xl space-y-1'>
      <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
      <FaTachometerAlt/>
          <span className='hidden md:inline ml-4'>Dashboard</span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
        <FaShoppingCart/>
          <span className='hidden md:inline ml-4'>Orders</span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
        <FaUsers/>
          <span className='hidden md:inline ml-4'>Customers</span>
        </li>        
        <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
        <FaUser/>
          <span className='hidden md:inline ml-4'>Users</span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
        <FaBox/>
          <span className='hidden md:inline ml-4'>Products</span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-900 hover:text-white transition-all duration-200">
        <FaCog/>
          <span className='hidden md:inline ml-4'>Settings</span>
        </li>


      </ul>
    </div>
  )
}

export default Sidebar