'use client'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Login=()=>{

    const[user,setUser]=[{
        email:"",
        passoword:""
    }]

    const handleInput=(e)=>{
        const{name,value}=e.target;
        setUser(prevUser=>({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try {
            // Replace with your API endpoint
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            });
      
            const result = await response.json();
            if (response.ok) {
              alert('Login successful!');
              // Optional: Reset form or redirect
              setUser({ username: "", password: "" });
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
      <div className='w-full sm:w-[90%] md:w-[70%] lg:w-[70%] lg:h-[50%] bg-white rounded-md shadow-lg border border-black p-4'>
        <p className='text-center text-2xl font-semibold mb-4'>Login</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-lg sm:text-xl mb-1'>
              Username or Email
            </label>
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

          <div className='mb-6'>
            <label htmlFor="password" className='block text-lg sm:text-xl mb-1'>
              Password
            </label>
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

          <div className='flex justify-center'>
            <Button colorScheme='blue' size='sm' className='w-full sm:w-auto'>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;