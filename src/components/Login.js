import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);       //togglefeature
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg' alt='backgroundImg'/>
        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && 
            (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)
            }

            <input type='text' 
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700'/> 

            <input type='password' 
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700'/>
            
            <button className='p-4 my-6 bg-red-700 w-full'>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a registered? SignIn Now "}
              
              </p>
        </form>
    </div>
  )
}

export default Login