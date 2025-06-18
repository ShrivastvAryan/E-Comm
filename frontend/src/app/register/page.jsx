'use client'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import{useNavigate} from "react-router-dom"

const Register=()=>{

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
        window.location.replace("/");
      }
      else{
        alert(responseData.errors) //Need to integrate the error
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
        window.location.replace("/");
      }
      else{
        alert(responseData.errors||"Signup Failed") //Need to integrate the error
      }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    state === "Login" ? login() : signup();
  };

    return(
       <div className='w-full min-h-screen flex justify-center items-start sm:items-center px-2 bg-slate-200'>
      <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white rounded-md shadow-lg border border-black p-4'>
        <p className='text-center text-2xl font-semibold mb-4'>{state}</p>

        <form className='space-y-4 bg-white' onSubmit={handleSubmit}>

         {state==="Signup"? <div>
            <label htmlFor='name' className='block text-lg sm:text-xl mb-1'>Enter Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={changeHandler}
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
              value={formData.email}
              onChange={changeHandler}
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
              value={formData.password}
              onChange={changeHandler}
              required
              autoComplete="off"
              
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div className='flex justify-center pt-2'>
            <Button type='submit' colorScheme='blue' size='sm' className='w-full sm:w-auto' onClick={()=>{state==="login"?login():signup()}}>
              Continue
            </Button>
          </div>
          {state==="Signup"?
          <p>Already have an account? <span onClick={()=>{setState("Login")}} className='text-blue-600 font-bold cursor-pointer'>Login Here</span> </p>:
          <p>Create an account<span onClick={()=>{setState("Signup")}}className='text-blue-600 font-bold cursor-pointer' > Click Here</span> </p>
          }
          
        </form>
      </div>
    </div>
  );
};

export default Register;
       