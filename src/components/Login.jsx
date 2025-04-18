import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { app } from '../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const auth=getAuth(app)

    function handleLogin(e){
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>navigate("/dashboard"))
        .catch((err)=>alert(err))
        }
    
    function handleSignUp(){
      navigate("/signup");
    }

  return (
    <div className='bg-gradient-to-br from-blue-700 white min-h-screen flex items-center justify-center px-4'>
    <div className='w-full max-w-sm bg-gradient-to-br from-cyan-300 to-indigo-700 p-6 rounded-2xl shadow-lg'>
        <h2 className='text-xl sm:text-2xl font-bold mb-4 text-center'>Login</h2>
        <form className="space-y-4">
           <div>
            <label className='block text-sm font-bold  text-gray-700 mb-1'>Email</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' className='w-full px-4 py-2 border border-gray-300 rounded-xl' required/>
           </div>
           <div>
            <label className='block text-sm font-bold  text-gray-700 mb-1'>Password</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' className='w-full px-4 py-2 border border-gray-300 rounded-xl' required/>
           </div>
           <button type='submit' onClick={handleLogin} className='w-full bg-blue-500 text-black py-2 rounded-xl hover:bg-blue-600 transition duration-200'>Login</button>
           <button type='button' onClick={handleSignUp} className='w-full bg-blue-500 text-black py-2 rounded-xl hover:bg-blue-600 transition duration-200'>SignUp</button>
           <p className='flex items-center justify-center'>New User, <Link to="/signup" className="text-white text-xl underline">SignUp</Link></p>
        </form>

    </div>
    </div>
  )
}

export default Login