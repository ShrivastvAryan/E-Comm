'use client'
import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewCollection=()=>{

  const URL=process.env.NEXT_PUBLIC_SERVER_URL

    const[newcollection,setNewCollection]=useState([]);
    const[popularmen,setPopularMen]=useState([]);
    const[popularwomen,setPopularWomen]=useState([]);
    const[popularkids,setPopularKids]=useState([]);

    useEffect(() => {
  AOS.init({ duration: 800 });
}, []);

    useEffect(()=>{
        const fetchAll=async()=>{
            try {
          const [newData, menData, womenData, kidsData] = await Promise.all([
          fetch(`${URL}/newcollections`).then(res => res.json()),
          fetch(`${URL}/popularmen`).then(res => res.json()),
          fetch(`${URL}/popularwomen`).then(res => res.json()),
          fetch(`${URL}/popularkids`).then(res => res.json()),
        ]);

        setNewCollection(newData);
        setPopularMen(menData);
        setPopularWomen(womenData);
        setPopularKids(kidsData);

            } catch (error) {
                 console.error("Error fetching collections:", error);
            }
        }

        if(!fetchAll){
            return <p>Loading...</p>
        }
          fetchAll();
    },[])

    return(
        <>
        <div className="w-[95vw] max-w-7xl mx-auto mt-12 mb-16 px-4">
  {/* Enhanced Header with gradient and animation */}
  <div className="relative mb-12">
    <h1 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
      New Collections
    </h1>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
  </div>

  {/* Enhanced Grid with staggered animations */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {newcollection.map((items, index) => (
      <Link 
        href={`/${items.category}/${items.id}`} 
        key={items.id}
        className="group"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="relative w-full h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group-hover:shadow-blue-500/25 border border-gray-100 animate-fade-in-up">
          
          {/* Sale Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
              SALE
            </span>
          </div>

          {/* Wishlist Button */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Enhanced Image Container */}
          <div className="relative w-full h-[65%] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={items.image}
              alt={items.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Floating elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
          </div>

          {/* Enhanced Product Info */}
          <div className="p-4 bg-gradient-to-t from-white to-gray-50">
            <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2 truncate group-hover:text-blue-700 transition-colors duration-300">
              {items.name}
            </h3>
            
            {/* Enhanced Price Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 font-medium">MRP:</span>
                <span className="text-sm text-gray-500 line-through font-medium">₹{items.old_price}</span>
                <span className="text-lg font-bold text-green-600 animate-pulse">₹{items.new_price}</span>
              </div>
              
              {/* Discount Badge */}
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                {Math.round(((items.old_price - items.new_price) / items.old_price) * 100)}% OFF
              </span>
            </div>

            {/* Add to Cart Button - appears on hover */}
            <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:from-blue-600 hover:to-purple-700 shadow-lg">
              Add to Cart
            </button>
          </div>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </Link>
    ))}
  </div>
</div>   


  <div className="w-[95vw] max-w-7xl mx-auto mt-12 mb-16 px-4">
 
  <div className="relative mb-12">
    <h1 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
      Popular in Men
    </h1>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {popularmen.map((items, index) => (
      <Link 
        href={`/${items.category}/${items.id}`} 
        key={items.id}
        className="group"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="relative w-full h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group-hover:shadow-indigo-500/25 border border-gray-100 animate-fade-in-up">
    
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
              POPULAR
            </span>
          </div>

          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-[65%] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-cyan-50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={items.image}
              alt={items.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Floating elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
          </div>

          <div className="p-4 bg-gradient-to-t from-white to-gray-50">
            <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2 truncate group-hover:text-indigo-700 transition-colors duration-300">
              {items.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 font-medium">MRP:</span>
                <span className="text-sm text-gray-500 line-through font-medium">₹{items.old_price}</span>
                <span className="text-lg font-bold text-green-600 animate-pulse">₹{items.new_price}</span>
              </div>
              
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                {Math.round(((items.old_price - items.new_price) / items.old_price) * 100)}% OFF
              </span>
            </div>

            <button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-cyan-600 text-white py-2 rounded-lg font-semibold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:from-indigo-600 hover:to-cyan-700 shadow-lg">
              Add to Cart
            </button>
          </div>

          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </Link>
    ))}
  </div>
</div>


        <div className="w-[95vw] max-w-7xl mx-auto mt-12 mb-16 px-4">
 
  <div className="relative mb-12">
    <h1 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
      Popular in Women
    </h1>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {popularwomen.map((items, index) => (
      <Link 
        href={`/${items.category}/${items.id}`} 
        key={items.id}
        className="group"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="relative w-full h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group-hover:shadow-indigo-500/25 border border-gray-100 animate-fade-in-up">
    
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
              POPULAR
            </span>
          </div>

          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-[65%] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-cyan-50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={items.image}
              alt={items.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Floating elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
          </div>

          <div className="p-4 bg-gradient-to-t from-white to-gray-50">
            <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2 truncate group-hover:text-indigo-700 transition-colors duration-300">
              {items.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 font-medium">MRP:</span>
                <span className="text-sm text-gray-500 line-through font-medium">₹{items.old_price}</span>
                <span className="text-lg font-bold text-green-600 animate-pulse">₹{items.new_price}</span>
              </div>
              
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                {Math.round(((items.old_price - items.new_price) / items.old_price) * 100)}% OFF
              </span>
            </div>

            <button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-cyan-600 text-white py-2 rounded-lg font-semibold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:from-indigo-600 hover:to-cyan-700 shadow-lg">
              Add to Cart
            </button>
          </div>

          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </Link>
    ))}
  </div>
</div>

        <div className="w-[95vw] max-w-7xl mx-auto mt-12 mb-16 px-4">
 
  <div className="relative mb-12">
    <h1 className="text-2xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
      Popular in Kids
    </h1>
    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {popularkids.map((items, index) => (
      <Link 
        href={`/${items.category}/${items.id}`} 
        key={items.id}
        className="group"
        style={{
          animationDelay: `${index * 100}ms`
        }}
      >
        <div className="relative w-full h-96 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl group-hover:shadow-indigo-500/25 border border-gray-100 animate-fade-in-up">
    
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 animate-bounce">
              POPULAR
            </span>
          </div>

          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="relative w-full h-[65%] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-cyan-50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={items.image}
              alt={items.name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Floating elements */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
          </div>

          <div className="p-4 bg-gradient-to-t from-white to-gray-50">
            <h3 className="font-bold text-gray-800 text-sm lg:text-base mb-2 truncate group-hover:text-indigo-700 transition-colors duration-300">
              {items.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 font-medium">MRP:</span>
                <span className="text-sm text-gray-500 line-through font-medium">₹{items.old_price}</span>
                <span className="text-lg font-bold text-green-600 animate-pulse">₹{items.new_price}</span>
              </div>
              
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                {Math.round(((items.old_price - items.new_price) / items.old_price) * 100)}% OFF
              </span>
            </div>

            <button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-cyan-600 text-white py-2 rounded-lg font-semibold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:from-indigo-600 hover:to-cyan-700 shadow-lg">
              Add to Cart
            </button>
          </div>

          <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </Link>
    ))}
  </div>
</div>
        </>
    )
}

export default NewCollection;