'use client'
import Link from 'next/link';
import React from 'react';
import { Divider} from "@chakra-ui/react";
import{CiShoppingCart} from "react-icons/ci";
import { RadioGroup,DrawerHeader,DrawerBody,DrawerContent,Drawer,DrawerOverlay } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState,useEffect } from 'react';
import Image from 'next/image';

const Navbar=()=>{
  
   const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('auth-token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setToken(null); // trigger re-render
  };

    const categories = [
  { label: "Men", href: "/category/men" },
  { label: "Women", href: "/category/women" },
  { label: "Kids", href: "/category/kids" },
];


return(
    <>

<div className="w-full bg-white shadow-md">
  {/* Top Navbar */}
  <section className="w-[90vw] mx-auto flex items-center justify-between py-4">
    
    {/* Logo */}
    <div className="w-16 h-10  flex items-center justify-center text-sm font-bold relative">
      <Link href='/'>
         <Image
      src="/logo.png"
      alt="Logo"
      fill
      className="cursor-pointer object-cover flex justify-start"
    />
      </Link>
    </div>

    {/* Menu Tabs */}
    <div className=" hidden md:flex gap-6 ">
      {categories.map(({label,href}) => (
        <div
          key={label}
          className="relative font-semibold text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
        >
         <Link href={href}><p className="text-sm sm:text-base lg:text-md px-2">{label}</p></Link> 
        </div>
      ))}
    </div>

    <div className='flex gap-4'>
    <div className='md:hidden'>
      <RadioGroup defaultValue={placement} onChange={setPlacement} cl>
      </RadioGroup>
      <button className='pt-2' onClick={onOpen}>
        <HamburgerIcon/>
      </button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Categories</DrawerHeader>
          <DrawerBody>
            <Link href='/category/men'>
            <p>Men</p>
            </Link>
            <Link href='/category/women'>
            <p>Women</p>
            </Link>
            <Link href='/category/kids'>
            <p>Kids</p>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </div>

   {token ? (
        <button
          onClick={handleLogout}
          className="border-red-500 border-[2px] p-1 px-3 text-red-500 rounded-xl hover:text-red-600"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/register"
          className="border-blue-500 border-[2px] p-1 px-3 text-blue-500 rounded-xl hover:text-blue-600"
        >
          Login
        </Link>
      )}

    {/* Cart Icon */}
    <div className="w-10 h-10 rounded-full flex justify-center items-center text-2xl text-gray-700 hover:bg-gray-200 cursor-pointer">
      <Link href='/cart'><CiShoppingCart /></Link>
    </div>
  </div>

  </section>

  {/* Divider Line */}
  <Divider orientation="horizontal" className="mt-1" />
</div>

    
    </>
    )
}


export default Navbar