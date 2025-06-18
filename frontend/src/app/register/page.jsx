'use client'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useState } from "react"
import{useNavigate} from "react-router-dom"

const Register=()=>{

    const [user,setUser]=useState({
        username:"",
        phone:"",
        email:"",
        password:""

    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
          ...prevUser,
          [name]: value
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          // Replace with your API endpoint
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
    
          const result = await response.json();
          if (response.ok) {
            alert('Registration successful!');
            // Optional: Reset form or redirect
            setUser({ username: "", phone: "", email: "", password: "" });
          } else {
            alert(`Error: ${result.message}`);
          }
        } catch (error) {
          console.error("Error during registration:", error);
          alert("An unexpected error occurred.");
        }
      };

    
    return(
       <div className='w-full min-h-screen mt-4 flex justify-center items-start sm:items-center px-2'>
      <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white rounded-md shadow-lg border border-black p-4'>
        <p className='text-center text-2xl font-semibold mb-4'>Register</p>

        <form onSubmit={handleSubmit} className='space-y-4'>

          <div>
            <label htmlFor='name' className='block text-lg sm:text-xl mb-1'>Enter Your Name</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div>
            <label htmlFor='phone' className='block text-lg sm:text-xl mb-1'>Enter Your Phone No.</label>
            <input
              type="text"
              name="phone"
              placeholder="+91"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-lg sm:text-xl mb-1'>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-lg sm:text-xl mb-1'>Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              className="w-full p-2 bg-blue-100 rounded-md"
            />
          </div>

          <div className='flex justify-center pt-2'>
            <Button type='submit' colorScheme='blue' size='sm' className='w-full sm:w-auto'>
              Create Account
            </Button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
       