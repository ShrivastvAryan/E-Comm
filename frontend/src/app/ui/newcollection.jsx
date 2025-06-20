'use client'
import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";

const NewCollection=()=>{

    const[newcollection,setNewCollection]=useState([]);
    const[popularmen,setPopularMen]=useState([]);
    const[popularwomen,setPopularWomen]=useState([]);
    const[popularkids,setPopularKids]=useState([]);

    useEffect(()=>{
        const fetchAll=async()=>{
            try {
          const [newData, menData, womenData, kidsData] = await Promise.all([
          fetch("http://localhost:5000/newcollections").then(res => res.json()),
          fetch("http://localhost:5000/popularmen").then(res => res.json()),
          fetch("http://localhost:5000/popularwomen").then(res => res.json()),
          fetch("http://localhost:5000/popularkids").then(res => res.json()),
        ]);

        setNewCollection(newData);
        setPopularMen(menData);
        setPopularWomen(womenData);
        setPopularKids(kidsData);

            } catch (error) {
                 console.error("Error fetching collections:", error);
            }
        }

          fetchAll();
    },[])

    return(
        <>
        <div className="w-[90vw] h-auto mx-auto mt-10 mb-10 ">
            
            <h1 className=" text-3xl sm:text-4xl block text-center ">New Collections</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90vw] gap-4 mt-10">
            {newcollection.map((items,index)=>(
              <Link href={`/${items.category}/${items.id}`}>
                 <div className="w-full h-80 sm:h-52 md:h-64 lg:h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative w-full h-[70%] bg-gray-50 flex items-center justify-center">
                           <Image
                            src={items.image}
                            alt={items.name}
                            fill
                            className="object-contain"
                            />
                           </div>
                           <div className="p-3 text-sm lg:text-base">
                          <p className="font-semibold text-gray-800 truncate">{items.name}</p>
                          <span className="font-medium mt-1  text-gray-500">MRP:</span><span className="font-medium mt-1 line-through text-gray-500">₹{items.old_price}</span><span className="text-black font-medium mt-1 pl-1">₹{items.new_price}</span>
                           </div>
                           </div>
                </Link>
            ))}
            </div>
            
        </div>

        <div className="w-[90vw] h-auto mx-auto mt-10 mb-10 ">
            
            <h1 className=" text-3xl sm:text-4xl block text-center ">Popular in Men</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90vw] gap-4 mt-10">
            {popularmen.map((items,index)=>(
              <Link href={`/${items.category}/${items.id}`}>
                 <div className="w-full h-80 sm:h-52 md:h-64 lg:h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative w-full h-[70%] bg-gray-50 flex items-center justify-center">
                           <Image
                            src={items.image}
                            alt={items.name}
                            fill
                            className="object-contain"
                            />
                           </div>
                           <div className="p-3 text-sm lg:text-base">
                          <p className="font-semibold text-gray-800 truncate">{items.name}</p>
                          <span className="font-medium mt-1  text-gray-500">MRP:</span><span className="font-medium mt-1 line-through text-gray-500">₹{items.old_price}</span><span className="text-black font-medium mt-1 pl-1">₹{items.new_price}</span>
                           </div>
                           </div>
                </Link>
            ))}
            </div>
            
        </div>

         <div className="w-[90vw] h-auto mx-auto mt-10 mb-10 ">
            
            <h1 className=" text-3xl sm:text-4xl block text-center ">Popular in Women</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90vw] gap-4 mt-10">
            {popularwomen.map((items,index)=>(
              <Link href={`/${items.category}/${items.id}`}>
                 <div className="w-full h-80 sm:h-52 md:h-64 lg:h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative w-full h-[70%] bg-gray-50 flex items-center justify-center">
                           <Image
                            src={items.image}
                            alt={items.name}
                            fill
                            className="object-contain"
                            />
                           </div>
                           <div className="p-3 text-sm lg:text-base">
                          <p className="font-semibold text-gray-800 truncate">{items.name}</p>
                          <span className="font-medium mt-1  text-gray-500">MRP:</span><span className="font-medium mt-1 line-through text-gray-500">₹{items.old_price}</span><span className="text-black font-medium mt-1 pl-1">₹{items.new_price}</span>
                           </div>
                           </div>
                </Link>
            ))}
            </div>
            
        </div>

        <div className="w-[90vw] h-auto mx-auto mt-10 mb-10 ">
            
            <h1 className=" text-3xl sm:text-4xl block text-center ">Popular in Kids</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90vw] gap-4 mt-10">
            {popularkids.map((items,index)=>(
              <Link href={`/${items.category}/${items.id}`}>
               <div className="w-full h-80 sm:h-52 md:h-64 lg:h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative w-full h-[70%] bg-gray-50 flex items-center justify-center">
                           <Image
                            src={items.image}
                            alt={items.name}
                            fill
                            className="object-contain"
                            />
                           </div>
                           <div className="p-3 text-sm lg:text-base">
                          <p className="font-semibold text-gray-800 truncate">{items.name}</p>
                          <span className="font-medium mt-1  text-gray-500">MRP:</span><span className="font-medium mt-1 line-through text-gray-500">₹{items.old_price}</span><span className="text-black font-medium mt-1 pl-1">₹{items.new_price}</span>
                           </div>
                           </div>
                </Link>
            ))}
            </div>
            
        </div>
        </>
    )
}

export default NewCollection;