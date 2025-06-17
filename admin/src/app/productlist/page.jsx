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

    const RemoveProduct=async(id)=>{
        await fetch('http://localhost:5000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })

        await fetchInfo();
    }

    return(
        <>
        <div className="flex">

        <div className="h-screen w-[20%]">
        <Sidebar/>
        </div>

        <div className="h-screen w-[80%] bg-slate-200 ">

        <div className="h-auto w-auto p-5">
        <h1 className="text-3xl font-semibold pb-2">All Products</h1>

         <div>
            {allproducts.map((product,index)=>(
                <div key={index} className="h-auto w-auto bg-slate-100 flex justify-between shadow-md mt-4 rounded-md p-2 pt-3" >
                    <div>
                    <p className="text-2xl font-semibold">Product Title: {product.name}</p>
                    <p className="text-xl mt-2">Original Price: ${product.old_price}</p>
                    <p className="text-xl">Offer Price: ${product.new_price}</p>
                    <p className="text-xl">Category: {product.category}</p>
                    <button onClick={()=>{RemoveProduct(product.id)}} className="bg-red-700 p-1 rounded-md text-white mt-4">Remove</button>
                    </div>
                    <div>
                        <img src={product.image} alt="preview-image" className="h-40 w-40 object-contain"/>
                    </div>
                </div>
            ))}
        </div>

        </div>

        </div>

        </div>
        </>
    )
}

export default AllProduct