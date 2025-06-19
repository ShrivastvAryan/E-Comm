'use client'
import Image from "next/image";
import { useState,useEffect } from "react";
import React from "react";

const All=()=>{

    const[allproduct,setAllProduct]=useState([]);
    const[cartItems,setCartItems]=useState([]);

    const [newcollection,setNewCollection]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNewCollection(data))
    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAllProduct(data))

    },[]);

    return(
      <>
      <h1 className="text-5xl text-center block pt-10 pb-10">Collections Of Women</h1>
        <div className="h-auto w-screen flex gap-4">
          
           <div className="w-screen grid gap-4 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-4">
           <div className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg scroll-animate bg-slate-600">
            <div className="w-full h-[70%] bg-slate-500"></div>
            <div className="w-full h-[30%] bg-red-500"></div>
           </div>
         {/* Add more items as needed */}
     </div>
        </div>
        </>
    )
}

export default All;