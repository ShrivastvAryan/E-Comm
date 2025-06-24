'use client'
import Link from 'next/link';
import React from 'react';
import{CiShoppingCart, CiSearch, CiUser, CiHeart} from "react-icons/ci";
import { DrawerHeader,DrawerBody,DrawerContent,Drawer,DrawerOverlay } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { useState,useEffect } from 'react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')
  const [token, setToken] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('auth-token'));
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setToken(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Searching for:', searchQuery);
  };

  const categories = [
    { label: "Men", href: "/category/men", icon: "👔" },
    { label: "Women", href: "/category/women", icon: "👗" },
    { label: "Kids", href: "/category/kids", icon: "🧸" },
  ];

  return (
    <>
      <div className={`w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
 
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
          <p className="animate-pulse">🎉 Free shipping on orders over ₹999! Limited time offer</p>
        </div>

  
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            
        
            <div className="flex items-center space-x-4">
          
              <Link href="/">
                <h1 className="text-sm md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 cursor-pointer">
                  E-Shop
                </h1>
              </Link>
            </div>

          {/*  <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <form onSubmit={handleSearch} className="w-full relative group">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                  />
                  <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
                >
                  Search
                </button>
              </form>
            </div> */} 

          
            <div className="hidden md:flex items-center space-x-8">
              {categories.map(({ label, href, icon }) => (
                <Link key={label} href={href}>
                  <div className="group relative cursor-pointer">
                    <div className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <span className="text-lg">{icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                        {label}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
         
            {/* <Link href="/wishlist">
                <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-red-500 transition-all duration-300 group">
                  <CiHeart className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    0
                  </span>
                </div>
              </Link> */}  
 
              <Link href="/cart">
                <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 group">
                  <CiShoppingCart className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    2
                  </span>
                </div>
              </Link>

           
              {token ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleLogout}
                    className="sm:block px-4 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/register">
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium hover:scale-105 shadow-lg">
                    SingUp
                  </button>
                </Link>
              )}

              <div className="md:hidden">
                <button 
                  onClick={onOpen}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <HamburgerIcon />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={onClose} className="text-white hover:text-gray-200">
                  ✕
                </button>
              </div>
            </DrawerHeader>
            <DrawerBody className="p-0">
              <div className="space-y-2 p-4">
                {categories.map(({ label, href, icon }) => (
                  <Link key={label} href={href} onClick={onClose}>
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 border-b border-gray-100">
                      <span className="text-2xl">{icon}</span>
                      <span className="font-medium text-gray-700">{label}</span>
                    </div>
                  </Link>
                ))}
                
                <div className="pt-4 space-y-2">
                 {/*  <Link href="/register" onClick={onClose}>
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <CiUser className="text-2xl text-gray-600" />
                      <span className="font-medium text-gray-700">SignUp</span>
                    </div>
                  </Link>
                  
                  <Link href="/wishlist" onClick={onClose}>
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <CiHeart className="text-2xl text-gray-600" />
                      <span className="font-medium text-gray-700">Wishlist</span>
                    </div>
                  </Link> */}

                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export default Navbar