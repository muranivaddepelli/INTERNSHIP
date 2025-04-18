import React from 'react'
import {Route, Routes, Link, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import { useLocation } from 'react-router-dom'


function App() {
  const location=useLocation();
  const pages=['/login','/signup','/'].includes(location.pathname);
  return (
    <div className={`min-h-screen bg-cyan-800 ${pages?'items-center flex justify-center':''}`}>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App