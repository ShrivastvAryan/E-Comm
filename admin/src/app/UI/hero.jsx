 'use client'
import React from "react";
import { useState } from "react";
import upload from "../../../public/upload.png"
import Sidebar from "./sidebar";
import Image from "next/image";

const Hero=()=>{

    const [image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"men",
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
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        
        let formData= new FormData();
        formData.append('product',image);

        await fetch('http://localhost:5000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:5000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                   'Content-Type':'application/json',

                },
                body:JSON.stringify(product),
                
            }).then ((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product added"):alert("Failed")
            })
        }
    }
    return(
        <>
       <div>
  <div className="flex flex-col lg:flex-row">
    {/* Sidebar */}
    <div className="w-full lg:w-1/5 h-auto lg:h-screen">
      <Sidebar />
    </div>

    {/* Form Area */}
    <div className="w-full lg:w-4/5 bg-slate-300 min-h-screen">
      <form
        className="p-5 md:p-10 bg-white m-2 md:m-5 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Product Title */}
        <div className="mb-6">
          <span className="font-semibold text-xl block mb-2">Product Title:</span>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type here"
            className="w-full md:w-[60%] text-sm bg-blue-100 rounded-md p-2"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <span className="font-semibold text-xl block mb-2">Product Category:</span>
          <select
            value={productDetails.category}
            onChange={changeHandler}
            name="category"
            className="p-2 font-semibold text-sm bg-blue-100 rounded-sm"
          >
            <option>men</option>
            <option>women</option>
            <option>kids</option>
          </select>
        </div>

        {/* Old Price */}
        <div className="mb-6">
          <span className="font-semibold text-xl block mb-2">Price:</span>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
            className="w-full md:w-[60%] text-sm bg-blue-100 rounded-md p-2"
          />
        </div>

        {/* Offer Price */}
        <div className="mb-6">
          <span className="font-semibold text-xl block mb-2">Offer Price:</span>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
            className="w-full md:w-[60%] text-sm bg-blue-100 rounded-md p-2"
          />
        </div>

        {/* Image Input */}
        <div className="mb-6">
          <span className="font-semibold text-xl block mb-2">File Input:</span>
          <label htmlFor="file-input" className="cursor-pointer block">
            <div className="h-36 w-36 object-contain relative">
              <Image
                src={image ? URL.createObjectURL(image) : upload}
                alt="Preview"
                fill
              />
            </div>
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>

        {/* Add Button */}
        <div className="mt-6">
          <button
            onClick={() => addProduct()}
            className="p-3 text-white font-semibold rounded-md w-full sm:w-24 bg-blue-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

        </>
    )
}

export default Hero