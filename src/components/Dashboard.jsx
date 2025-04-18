import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Content from './Content'

function Dashboard() {
    return(
        <div className='flex min-h-screen bg-gradient-to-b from-cyan-300 to-indigo-700 text-gray-900'>
            <Sidebar/>
            <div className='grow ml-16 md:ml-64 h-full lg:h-screen flex flex-col'>
                <Navbar/>
                <Content/>
            </div>
        </div>
    )
  
}

export default Dashboard