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

     <section className="w-screen h-[50%] flex flex-row justify-evenly pt-4 p-1">
     
     <Tabs index={getTabIndex()} variant='soft-rounded' colorScheme='blue' className="font-semibold text-black" size='sm'>
     <TabList >
     <Tab as={Link} href="/" fontWeight="semibold" color="black">Dashboard</Tab>
     <Tab as={Link} href="/shopping" fontWeight="semibold" color="black">Shopping</Tab>
     </TabList>
     </Tabs>
  
     <div className="w-8 h-8 rounded-full flex justify-center items-center text-4xl">
     <CiShoppingCart />
     </div>

     <Menu>
     <MenuButton as={Button} colorScheme=''>
     <Avatar bg='blue.700' size='sm' />
     </MenuButton>
     <MenuList>
      <MenuItem as={Link} href='/login'>Login</MenuItem>
      <MenuItem as={Link} href='/register'>Register </MenuItem>
    </MenuList>
     </Menu>
     </section>

     <section className="w-screen h-[50%] flex justify-around pt-3">
        <h1 className="font-semibold text-2xl"><Link href="/">Explore</Link></h1>
     <div>
     <Tabs index={getExploreIndex()}variant='soft-rounded' colorScheme='blue' size='sm' className="font-semibold text-black">
     <TabList >
    <Tab fontWeight="semibold" color="black">All</Tab>
     <Tab as={Link} href="/men" fontWeight="semibold" color="black">Men</Tab>
     <Tab as={Link} href="/women" fontWeight="semibold" color="black">Women</Tab>
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