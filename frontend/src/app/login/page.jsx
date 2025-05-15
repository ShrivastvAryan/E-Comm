'use client'
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Login=()=>{
    return(
        <>
        <div className='w-screen h-auto mt-2 flex justify-center'>
            <div className='w-[80vw] h-auto   rounded-md shadow-lg border-black'>
            <p className='block text-center text-2xl font-semibold p-2 mt-4'>Login</p>

            <div>
                <label  htmlFor="username" className='block  p-2 text-xl'>Username or Email</label>
                <input type="text" name="email"
                     placeholder="username"
                     required
                     autoComplete="off"
                    className=" m-2 p-1 bg-blue-100 rounded-md w-[90%]"/>
            </div>
            <label  htmlFor="password" className='block  p-2 text-xl'>Password</label>
            <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-100 p-1 rounded-md w-[90%]"/>
            <div>


            <div className='w-full flex items-center justify-center p-2 '>
            <Button colorScheme='blue' size='sm' className='mb-3'>Login </Button>
            </div>

            </div>
            </div>

        </div>
        </>
    )
}

export default Login;