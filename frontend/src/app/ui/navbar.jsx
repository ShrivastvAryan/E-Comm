'use client'
import Link from 'next/link';
import React from 'react';
import { Tab,TabList,Tabs,Avatar,Divider,Menu,MenuButton,MenuList,Button,MenuGroup,MenuItem} from "@chakra-ui/react";
import{CiShoppingCart} from "react-icons/ci";
import { usePathname } from 'next/navigation';

const Navbar=()=>{

    const explorename=usePathname();

    const pathname = usePathname(); 

    const categories = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
];


    return(
    <>

<div className="w-full bg-white shadow-md">
  {/* Top Navbar */}
  <section className="w-[90vw] mx-auto flex items-center justify-between py-4">
    
    {/* Logo */}
    <div className="w-28 h-10 bg-gray-100 flex items-center justify-center text-sm font-bold">
      <Link href='/'>
      LOGO
      </Link>
    </div>

    {/* Menu Tabs */}
    <div className="flex gap-6">
      {categories.map(({label,href}) => (
        <div
          key={label}
          className="relative font-semibold text-black cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
        >
         <Link href={href}><p className="text-sm sm:text-base lg:text-md px-2">{label}</p></Link> 
        </div>
      ))}
    </div>

    {/* Cart Icon */}
    <div className="w-10 h-10 rounded-full flex justify-center items-center text-2xl text-gray-700 hover:bg-gray-200 cursor-pointer">
      <Link href='/cart'><CiShoppingCart /></Link>
    </div>
  </section>

  {/* Divider Line */}
  <Divider orientation="horizontal" className="mt-1" />
</div>

    
    </>
    )
}


export default Navbar