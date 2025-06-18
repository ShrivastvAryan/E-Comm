'use client'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import{useNavigate} from "react-router-dom"

const Register=()=>{

    const[state,setState]=useState("Signup")
    
    return(
       <div className='w-full min-h-screen flex justify-center items-start sm:items-center px-2 bg-slate-200'>
      <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white rounded-md shadow-lg border border-black p-4'>
        <p className='text-center text-2xl font-semibold mb-4'>{state}</p>

        <form className='space-y-4 bg-white'>

         {state==="Signup"? <div>
            <label htmlFor='name' className='block text-lg sm:text-xl mb-1'>Enter Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              autoComplete="off"
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>:<></>}

          <div>
            <label htmlFor='email' className='block text-lg sm:text-xl mb-1'>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
              
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-lg sm:text-xl mb-1'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              autoComplete="off"
              
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div className='flex justify-center pt-2'>
            <Button type='submit' colorScheme='blue' size='sm' className='w-full sm:w-auto'>
              Create Account
            </Button>
          </div>
          {state==="Signup"?
          <p>Already have an account? <span>Login Here</span> </p>:
          <p>Create an account<span>Click Here</span> </p>
          }
          
        </form>
      </div>
    </div>
  );
};

export default Register;
       