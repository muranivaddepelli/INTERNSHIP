import React from 'react'
import { useState } from 'react'
import {Eye,EyeOff} from 'lucide-react'
import {app} from "../firebase/firebase.config"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [username,setUsername]=useState("");
    const [age,setAge]=useState("");
    const [phone,setPhone]=useState("");
    const [gender,setGender]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false)
    const navigate=useNavigate();
    const auth=getAuth(app)
    const handleSubmit=async (e)=>{
      e.preventDefault()
      console.log(email,password)
      createUserWithEmailAndPassword(auth,email,password)
      .then((res)=>{console.log(res);
       toast.success("✅ Registered successfully!");
       setUsername('');
       setAge('');
       setPhone('');
       setGender('');
       setEmail('');
       setPassword('');
       setShowPassword(false);
       navigate('/login');
       setTimeout(() => {
         console.log("Navigating to login after reset...");
         navigate('/login');
       }, 2000); 

    })
      .catch((err)=>{toast.error(err.message);})

    }

  return (
   <div className= 'bg-gradient-to-b from-blue-700 to-white min-h-screen flex items-center justify-center px-4'>
    <div className='w-full max-w-sm bg-gradient-to-br from-cyan-300 to-indigo-700 p-6 rounded-2xl shadow-lg'>
        <h2 className='text-xl font-bold mb-4 text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Username</label>
             <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your name' className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required/>
          </div>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Age</label>
             <input type='number' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your name' className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required/>
          </div>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Phone Number</label>
             <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter your phone number' className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required/>
          </div>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Gender</label>
             <select value={gender} onChange={(e)=>setGender(e.target.value)}  className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required>
             <option value="">Select Gender</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option>
             </select>
          </div>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Email</label>
             <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required/>
          </div>
          <div>  
             <label className='block text-sm font-bold text-gray-700 mb-1'>Password</label>
             <div className='relative'>
               <input type={showPassword?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='w-full px-4 py-2 border border-gray-300 rounded-xl ' required/>
               <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600'>{showPassword?<Eye size={18}/>:<EyeOff size={18}/>}</button>
             </div>
          </div>
          <button type='submit' className='w-full bg-cyan-900 text-white py-2 rounded-xl hover:bg-cyan-600'>Sign Up</button>
          <Link to='/login' className="text-white text-xl underline flex justify-center">Login</Link>
        </form>
        <ToastContainer position='top-right' autoClose={1000}/>
    </div>
    </div>
  )
}

export default Signup