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
        <>
        <div className='w-screen h-auto mt-2  flex justify-center '>
          <div className='w-[80vw] h-auto rounded-md shadow-lg border-black mt-4'>
          <p className='block text-center text-2xl font-semibold p-2'>Register</p>

          <form onSubmit={handleSubmit}>

          <label htmlFor='name' className='block  p-2 text-xl'>Enter Your Name</label>
            <input type="text" name="username"
                     placeholder="username"
                     required
                     autoComplete="off"
                     value={user.username}
                     onChange={handleInput}
                    className=" m-2 p-1 bg-blue-100 rounded-md w-[90%]"/>

         <label htmlFor='phone' className='block  p-2 text-xl'>Enter Your Phone No.</label>
            <input type="text" name="phone"
                     placeholder="+91"
                     required
                     autoComplete="off"
                     value={user.phone}
                     onChange={handleInput}
                    className=" m-2 p-1 bg-blue-100 rounded-md w-[90%]"/>

          <div>
            <label htmlFor='email' className='block  p-2 text-xl'>Email</label>
            <input type="text" name="email"
                     placeholder="email"
                     required
                     autoComplete="off"
                     value={user.email}
                     onChange={handleInput}
                    className=" m-2 p-1 bg-blue-100 rounded-md w-[90%]"/>
          </div>

          <label  htmlFor="password" className='block  p-2 text-xl'> Create Password</label>
            <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                     user={user.password}
                     onChange={handleInput}
                    className=" m-2 bg-blue-100 p-1 rounded-md w-[90%]"/>

          <div className='w-full flex items-center justify-center p-2 '>
                <Button type='submit' colorScheme='blue' size='sm' className='mb-3'>Create Account </Button>
          </div>

          </form>

          </div>
        </div>

        </>
    )
}

export default Register