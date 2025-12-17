import React, { useState } from 'react'
import Header from './header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white' >
        <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <div className="flex flex-col" >
            {!isSignInForm && <input className ="p-4 my-2 w-full" type='text' placeholder='Full Name'></input>}
            <input className ="p-4 my-2 w-full" type='text' placeholder='Email Address'></input>
            <input className ="p-4 my-5 w-full" type="password" placeholder='Password'></input>
            <button className='p-4 my-2 bg-red-500 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>
                {isSignInForm ? "New to Netflix? Sign up Now " : "Already registered? Sign In"}
            </p>
        </div>

        </form>
    </div>
  )
}

export default Login