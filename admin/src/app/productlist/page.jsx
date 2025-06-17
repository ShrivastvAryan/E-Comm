'use client'

import React from "react";
import Sidebar from "../UI/sidebar";
import { useEffect,useState } from "react";

const AllProduct=()=>{

    const [allproducts,setAllProducts]=useState([]);

    const fetchInfo =async()=>{
        await fetch('http://localhost:5000/allproducts')
        .then((res)=>res.json())
        .then((data=>{setAllProducts(data)}));
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    return(
        <>
        <div className="flex">

        <div className="h-screen w-[20%]">
        <Sidebar/>
        </div>

        <div className="h-screen w-[80%] bg-slate-400">

        <div className="h-auto w-auto p-5">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p></p>
        </div>

        </div>

        <div>
            {allproducts.map((product,index)=>(
                <div key={index} >
                    <img src={product.image} alt=""/>
                    <p>{product.name}</p>
                    <p>${product.old_price}</p>
                    <p>${product.new_price}</p>
                    <p>{product.category}</p>
                    <img src=""></img>
                </div>
            ))}
        </div>


        </div>
        </>
    )
}

export default AllProduct