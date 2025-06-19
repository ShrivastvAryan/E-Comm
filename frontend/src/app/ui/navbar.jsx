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

<div className="w-screen h-[20%]">

     <section className="w-[90vw] h-[50%] flex flex-row pt-4 mx-auto">

     <div className='w-32 h-auto bg-red-400'>

     </div>
    
     <div className="w-10 h-10  rounded-full flex justify-center items-center text-4xl ml-auto">
     <CiShoppingCart />
     </div>
  
    {/*  {localStorage.getItem(`auth-token`)
      ?<button onClick={()=>{localStorage.removeItem(`auth-token`); window.location.replace('/')}} className='p-1 rounded-lg bg-blue-200 ml-2 pl-2 pr-2'>Logout</button>
      : <button as={Link} href='/register' className='p-1 rounded-lg bg-blue-200 ml-2 pl-2 pr-2'>Login</button>}*/} 
     
     </section>

     <section className="w-[90vw] h-[50%] flex justify-between pt-3 mx-auto">
        <h1 className="font-semibold text-2xl pr-4 lg:text-5xl"><Link href="/">Explore</Link></h1>
     <div>
     <Tabs index={getExploreIndex()}variant='soft-rounded' colorScheme='blue' size='sm' className="font-semibold text-black">
     <TabList>
    <Tab fontWeight="semibold" color="black"><p className='lg:text-md lg:p-2'>Men</p></Tab>
     <Tab  fontWeight="semibold" color="black"><p className='lg:text-md lg:p-2'>Women</p></Tab>
     <Tab fontWeight="semibold" color="black"><p className='lg:text-md lg:p-2'>Kids</p></Tab>
     </TabList>
     </Tabs>
     </div>
     </section>

 </div>

 <Divider orientation='horizontal' className='mt-4' />
    
    </>
    )
}


export default Navbar