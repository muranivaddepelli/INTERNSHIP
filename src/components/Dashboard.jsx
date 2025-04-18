import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Header from './Header'

function Dashboard() {
    return(
        <div className='flex min-h-screen bg-gray-100 text-gray-900'>
            <Sidebar/>
            <div className='grow ml-16 md:ml-64 h-full lg:h-screen flex flex-col'>
                <Navbar/>
                <Header/>
            </div>
        </div>
    )
  
}

export default Dashboard