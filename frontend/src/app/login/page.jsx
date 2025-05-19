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
        <>
        <div className='w-screen h-auto mt-2 flex justify-center'>
            <div className='w-[80vw] h-auto   rounded-md shadow-lg border-black'>
            <p className='block text-center text-2xl font-semibold p-2 mt-4'>Login</p>

            <form onSubmit={handleSubmit}>

            <div>
                <label  htmlFor="email" className='block  p-2 text-xl'>Username or Email</label>
                <input type="text" name="email"
                     placeholder="email"
                     required
                     autoComplete="off"
                     value={user.email}
                     onChange={handleInput}
                    className=" m-2 p-1 bg-blue-100 rounded-md w-[90%]"/>
            </div>
            <label  htmlFor="password" className='block  p-2 text-xl'>Password</label>
            <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                     value={user.passoword}
                     onChange={handleInput}
                    className=" m-2 bg-blue-100 p-1 rounded-md w-[90%]"/>
            <div>


            <div className='w-full flex items-center justify-center p-2 '>
            <Button colorScheme='blue' size='sm' className='mb-3'>Login </Button>
            </div>

            </div>
            </form>
            </div>

        </div>
        </>
    )
}

export default Login;