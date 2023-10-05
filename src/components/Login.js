import React, { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="bg" />
    </div>
    <form className='absolute w-4/12 bg-black px-12 py-8 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      
      <h1 className='font-bold text-3xl my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
      
      {!isSignInForm && (<input 
      type='text' 
      placeholder='Full Name' 
      className='p-4 my-4 w-full bg-gray-700 text-sm' />
      )}

      <input 
      type='text' 
      placeholder='Email/Phone' 
      className='p-4 my-4 w-full bg-gray-700 text-sm' />

      <input 
      type='password' 
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-700 text-sm' />

      <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
      {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      
      <p className='cursor-pointer text-lg my-2' 
      onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Here." : "Already Registerd? Sign In Now."}
        </p>

    </form>
    </>
  )
}

export default Login
