'use client'
import React from 'react';
import { useState } from "react"
import { useToast } from '@chakra-ui/react'

const Register=()=>{

  const toast = useToast()

    const[state,setState]=useState("Signup");
    const[formData,setFormData]=useState({
      username:"",
      password:"",
      email:""
    });

    const changeHandler=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login=async()=>{
       console.log("Login Function executed",formData)
      let responseData;
      await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
          Accept:"application/form-data",
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
       
      toast({
        title: 'Login Successful',
        status: 'success',
         position: 'top',
        duration: 9000,
        isClosable: true,
      });

        window.location.replace("/");
      }
      else{
        toast({
        title: 'Invalid Credential',
        status: 'error',
        colorScheme:'red',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
      }
    }
    
    const signup=async()=>{
      console.log("SignUp Function executed",formData)
      let responseData;
      await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
          Accept:"application/form-data",
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);

        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          position:'top',
          duration: 9000,
          isClosable: true,
        })

        window.location.replace("/");
      }
      else{
         
         toast({
          title: 'SignUp Failed',
          colorScheme:'red',
          status: 'error',
          position:'top',
          duration: 9000,
          isClosable: true,
        })
      }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    state === "Login" ? login() : signup();
  };

    return(
       <div className='w-full min-h-screen flex justify-center items-start sm:items-center px-2 bg-slate-100'>
      <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white rounded-md shadow-lg p-10'>
        <span className='text-xl md:text-4xl block pb-2 font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse'>{state}</span>

        <form className='space-y-4 bg-white' onSubmit={handleSubmit}>

         {state==="Signup"? <div>
            <label htmlFor='name' className='block text-sm font-semibold text-gray-700 mb-2 transition-all duration-500'>Full Name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={changeHandler}
              required
              autoComplete="off"
              className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-2xl 
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300
               group-hover:bg-gray-50 placeholder-gray-400"
            />
          </div>:<></>}

          <div>
            <label htmlFor='email' className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={changeHandler}
              required
              autoComplete="off"
              className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-2xl 
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300
               group-hover:bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={changeHandler}
              required
              autoComplete="off"
              
              className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 group-hover:bg-gray-50 placeholder-gray-400"
            />
          </div>

          <div className='flex justify-center pt-2'>
            <button type='submit' className='w-fit p-2 px-6 sm:w-auto bg-gradient-to-r rounded-xl from-blue-600 via-purple-600 to-blue-800 text-white ' onClick={()=>{state==="login"?login():signup()}}>
              Continue
            </button>
          </div>
          <div className='pt-2'>
          {state==="Signup"?
          <p>Already have an account? <span onClick={()=>{setState("Login")}} className='text-blue-600 font-bold cursor-pointer'>Login Here</span> </p>:
          <p>Create an account<span onClick={()=>{setState("Signup")}}className='text-blue-600 font-bold cursor-pointer' > Click Here</span> </p>
          }
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
       