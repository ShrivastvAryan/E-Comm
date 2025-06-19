'use client'
import Link from 'next/link';
import React from 'react';
import { Tab,TabList,Tabs,Avatar,Divider,Menu,MenuButton,MenuList,Button,MenuGroup,MenuItem} from "@chakra-ui/react";
import{CiShoppingCart} from "react-icons/ci";
import { usePathname } from 'next/navigation';

const Navbar=()=>{

    const explorename=usePathname();

    const pathname = usePathname(); // Get current path
 // const { isOpen, onOpen, onClose } = useDisclosure();

   // Ensure pathname is defined before using it
   if (!pathname) return null;

   // Define active tab based on current route
   const getTabIndex = () => {
     switch (pathname) {
       case "/shopping":
         return 1;
       default:
         return 0;
     }
   };

   if(!explorename) return null;

   const getExploreIndex=()=>{
    switch(explorename){
        case "/women":
         return 1;
        default:
            return 0;
    }
   }

    return(
    <>

  <div className="w-full bg-white shadow-md">
      {/* Top Section */}
      <section className="w-[90vw] mx-auto flex items-center justify-between py-4 flex-wrap sm:flex-nowrap gap-4">
        
        {/* Logo */}
        <div className="w-28 h-10 bg-gray-100 flex items-center justify-center text-sm font-bold">
          LOGO
        </div>

        {/* Tabs */}
        <div className="flex-1 min-w-[200px]">
          <Tabs index={getExploreIndex()} variant="soft-rounded" colorScheme="blue" size="sm">
            <TabList className="flex gap-2">
              <Tab fontWeight="semibold" color="black">
                <p className="text-sm sm:text-base lg:text-md lg:p-2">Men</p>
              </Tab>
              <Tab fontWeight="semibold" color="black">
                <p className="text-sm sm:text-base lg:text-md lg:p-2">Women</p>
              </Tab>
              <Tab fontWeight="semibold" color="black">
                <p className="text-sm sm:text-base lg:text-md lg:p-2">Kids</p>
              </Tab>
            </TabList>
          </Tabs>
        </div>

        {/* Cart Icon */}
        <div className="w-10 h-10 rounded-full flex justify-center items-center text-3xl text-gray-700 hover:bg-gray-200 cursor-pointer">
          <CiShoppingCart />
        </div>

        {/* Auth Button (Uncomment if needed) */}
        {/* 
        {localStorage.getItem(`auth-token`) ? (
          <button
            onClick={() => {
              localStorage.removeItem(`auth-token`);
              window.location.replace('/');
            }}
            className="p-2 rounded-lg bg-blue-200 ml-2 text-sm"
          >
            Logout
          </button>
        ) : (
          <button
            as={Link}
            href="/register"
            className="p-2 rounded-lg bg-blue-200 ml-2 text-sm"
          >
            Login
          </button>
        )} 
        */}
      </section>

      {/* Optional: Bottom Section (currently empty) */}
      <section className="w-[90vw] h-auto flex justify-between pt-3 mx-auto">
        {/* Add content if needed */}
      </section>
    </div>
    
 <Divider orientation='horizontal' className='mt-4' />
    
    </>
    )
}


export default Navbar