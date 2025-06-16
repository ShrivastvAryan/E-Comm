 'use client'
import React from "react";
import { useState } from "react";
import upload from "../../../public/upload.png"


const Hero=()=>{

    const [image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    };

    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct=async()=>{

    }
    return(
        <>
        <div>
            <div className="flex">
                <div className="h-screen w-[20%] ">
                    <div className="w-auto h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer">Add Product</div>
                    <div className="w-auto h-auto bg-blue-300 inline-block p-4 m-5 rounded-md font-semibold cursor-pointer">Product List</div>
                </div>

                <div className="h-screen w-[80%] bg-slate-300">
                    <form className=" p-10 h-auto w-auto bg-white m-5 rounded-md">

                        <div className="h-auto w-auto  ">
                        <span className="font-semibold text-xl">Product Title: </span>
                        <input value={productDetails.name} onChange={changeHandler}type="text" name="name" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 ml-2"/>
                        </div>

                        <div className="h-auto w-auto mt-10">
                            <span className="font-semibold text-xl">Product Category: </span>
                            <select value={productDetails.category} onChange={changeHandler} name="category" className="p-2 font-semibold text-xs ml-2 bg-blue-100 rounded-sm ">
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kid</option>
                            </select>

                            <div className="h-auto w-auto mt-10">
                            <span className="font-semibold text-xl">Price: </span>
                            <input value={productDetails.old_price} onChange={changeHandler} type="text" name="price" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 ml-2"/>
                            </div>

                            <div className="h-auto w-auto mt-10">
                            <span className="font-semibold text-xl">Offer Price: </span>
                            <input value={productDetails.new_price} onChange={changeHandler} type="text" name="offer price" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 ml-2"/>
                            </div> 

                             <div className="h-auto w-auto mt-10">
                            <span className="font-semibold text-xl">File Input: </span>
                            <label htmlFor="file-input">
                            <img src ={image?URL.createObjectURL(image):upload} className="h-36 w-36 mt-2 object-contain"/>
                            </label>
                            <input onChange={imageHandler} type="file" name="image" id="file-input " placeholder="Type here"  className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 mt-2"/>
                            </div> 

                             <div className="h-auto w-auto mt-10">
                           <button className="p-3 text-white font-semibold rounded-md w-24 block bg-blue-500">Add</button>
                            </div> 

                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero