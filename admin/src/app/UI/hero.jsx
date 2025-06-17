 'use client'
import React from "react";
import { useState } from "react";
import upload from "../../../public/upload.png"
import Sidebar from "./sidebar";

const Hero=()=>{

    const [image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"Men",
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
            <div className="flex">

            <div className="h-screen w-[20%]">
            <Sidebar />
            </div>

                <div className="h-screen w-[80%] bg-slate-300">
                    <form className=" p-10 h-auto w-auto bg-white m-5 rounded-md" onSubmit={(e) => e.preventDefault()}>

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
                            <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 ml-2"/>
                            </div>
                            {/*name and value ka name should be same */}
                            <div className="h-auto w-auto mt-10">
                            <span className="font-semibold text-xl">Offer Price: </span>
                            <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 ml-2"/> 
                            </div> 

                           <div className="h-auto w-auto mt-10">
                           <span className="font-semibold text-xl">File Input: </span>
                           <label htmlFor="file-input">
                           <img
                           src={image ? URL.createObjectURL(image) : upload}
                           className="h-36 w-36 mt-2 object-contain cursor-pointer"
                           alt="Preview"
                           />
                           </label>
                          <input
                          onChange={imageHandler}
                          type="file"
                          name="image"
                          id="file-input"
                          className="w-[20vw] h-auto text-sm bg-blue-100 rounded-md p-2 mt-2"
                          hidden
                          />
                          </div>

                             <div className="h-auto w-auto mt-10">
                           <button onClick={()=>{addProduct()}}className="p-3 text-white font-semibold rounded-md w-24 block bg-blue-500">Add</button>
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