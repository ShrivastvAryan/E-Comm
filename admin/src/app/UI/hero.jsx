 'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useToast } from '@chakra-ui/react'

const Hero=()=>{

  const toast = useToast()

    const [image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"men",
        cloth_type:"cotton",
        new_price:"",
        old_price:"",
        description:""
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

        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data});

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addproduct`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                   'Content-Type':'application/json',

                },
                body:JSON.stringify(product),
                
            }).then ((resp)=>resp.json()).then((data)=>{
                   if (data.success) {
                   toast({
                    position: 'top',
                    title: 'Product added successfully.',
                   status: 'success',
                    duration: 5000,
                    isClosable: true,
                  });
                   } else {
                toast({
                  position: 'top',
                title: 'Failed to add product.',
                 status: 'error',
                  duration: 5000,
                  isClosable: true,
                 });
        }
            })
        }
    }
    return(
        <>
 <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
  <div className="flex flex-col lg:flex-row justify-center items-center">


    <div className="w-full lg:w-4/5 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
 
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600">Fill in the details to add a new product to your store</p>
        </div>

        <form
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Product Title */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Title
                </label>
                <div className="relative">
                  <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Enter product name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Category
                </label>
                <div className="relative">
                  <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Cloth Fabric */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Cloth Fabric
                </label>
                <div className="relative">
                  <select
                    value={productDetails.cloth_type}
                    onChange={changeHandler}
                    name="cloth_type"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                  >
                    <option value="cotton">Cotton</option>
                    <option value="linen">Linen</option>
                    <option value="wool">Wool</option>
                    <option value="cotton fabric">Cotton Fabric</option>
                    <option value="georgette">Georgette</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Pricing Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Regular Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Regular Price
                    </label>
                    <input
                      value={productDetails.old_price}
                      onChange={changeHandler}
                      type="text"
                      name="old_price"
                      placeholder="$0.00"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white"
                    />
                  </div>
                  
                  {/* Offer Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sale Price
                    </label>
                    <input
                      value={productDetails.new_price}
                      onChange={changeHandler}
                      type="text"
                      name="new_price"
                      placeholder="$0.00"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Image
                </label>
                <label htmlFor="file-input" className="cursor-pointer block">
                  <div className="relative group border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-400 transition-all duration-200 bg-gray-50 hover:bg-blue-50">
                    <div className="flex flex-col items-center justify-center">
                      {image ? (
                        <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                            <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              Change Image
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          <p className="text-gray-600 text-center font-medium">
                            Click to upload image
                          </p>
                          <p className="text-gray-400 text-sm text-center mt-1">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </label>
                <input
                  onChange={imageHandler}
                  type="file"
                  name="image"
                  id="file-input"
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {/* Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Product Description
                </label>
                <textarea
                  value={productDetails.description}
                  onChange={changeHandler}
                  name="description"
                  placeholder="Describe your product features, materials, care instructions..."
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-gray-50 focus:bg-white resize-none"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    Write a detailed description to help customers understand your product
                  </span>
                  <span className="text-xs text-gray-400">
                    {productDetails.description?.length || 0}/500
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={addProduct}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 min-w-48"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Product
              </span>
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Make sure all information is accurate before adding the product to your store
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Hero