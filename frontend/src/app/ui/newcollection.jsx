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
            <div className="grid grid-cols-2 lg:grid-cols-4 w-[90vw] gap-4 mt-8">
            {newcollection.map((items,index)=>(
              <Link href={`/${items.category}/${items.id}`}>
                <div key={index} className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg">
                    <div className="w-full h-[70%] flex items-center justify-center">
                <img src={items.image} alt={items.name} className="h-full w-full object-cover" />
              </div>
              <div className="w-full h-[30%] text-sm pl-2 ">
                <p className='font-semibold'>{items.name}</p>
                <p>₹{items.new_price}</p>
              </div>
                </div>
                </Link>
            ))}
            </div>
            
        </div>

        <div className="w-[90vw] h-auto  mx-auto mt-10 mb-10 ">
            
            <h1 className="text-3xl sm:text-4xl  block text-center ">Popular Men Collection</h1>
             <div className="grid grid-cols-2 lg:grid-cols-4 w-[90vw] gap-4 mt-8">
            {popularmen.map((items,index)=>(
              <Link href={`/men/${items.id}`}>
                <div key={index} className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg ">
                    <div className="w-full h-[70%] flex items-center justify-center">
                <img src={items.image} alt={items.name} className="h-full w-full object-cover" />
              </div>
              <div className="w-full h-[30%] text-sm pl-2 ">
                <p className='font-semibold'>{items.name}</p>
                <p>₹{items.new_price}</p>
              </div>
                </div>
                </Link>
            ))}
            </div>
            
        </div>

        <div className="w-[90vw] h-auto  mx-auto mt-10 mb-10 ">
            
            <h1 className="text-3xl sm:text-4xl  block text-center ">Popular Women Collection</h1>
             <div className="grid grid-cols-2 lg:grid-cols-4 w-[90vw] gap-4 mt-8">
            {popularwomen.map((items,index)=>(
              <Link href={`/women/${items.id}`}>
                <div key={index} className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg ">
                    <div className="w-full h-[70%] flex items-center justify-center">
                <img src={items.image} alt={items.name} className="h-full w-full object-cover" />
              </div>
              <div className="w-full h-[30%] text-sm pl-2 ">
                <p className='font-semibold'>{items.name}</p>
                <p>₹{items.new_price}</p>
              </div>
                </div>
                </Link>
            ))}
            </div>
            
        </div>

        <div className="w-[90vw] h-auto  mx-auto mt-10 mb-10 ">
            
            <h1 className="text-3xl sm:text-4xl  block text-center ">Popular Kids Collection</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-[90vw] gap-4 mt-4">
            {popularkids.map((items,index)=>(
                <Link href={`/kids/${items.id}`}>
                <div key={index} className="w-full h-44 sm:h-52 md:h-64 lg:h-72  shadow-lg">
                    <div className="w-full h-[70%] flex items-center justify-center">
                <img src={items.image} alt={items.name} className="h-full w-full object-cover" />
              </div>
              <div className="w-full h-[30%] text-sm pl-2 ">
                <p className='font-semibold'>{items.name}</p>
                <p>₹{items.new_price}</p>
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