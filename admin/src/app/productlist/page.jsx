'use client'

import React, { useEffect, useState } from "react";
import Sidebar from "../UI/sidebar";
import { useToast } from '@chakra-ui/react'

const AllProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const toast = useToast()


  const fetchInfo = async () => {
    await fetch('http://localhost:5000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const RemoveProduct = async (id) => {
    await fetch('http://localhost:5000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    await fetchInfo();
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 lg:h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-4/5 bg-slate-200 min-h-screen p-4">
        <h1 className="text-2xl md:text-3xl font-semibold pb-4">All Products</h1>

        <div className="space-y-4">
          {allproducts.map((product, index) => (
            <div
              key={index}
              className="bg-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center shadow-md rounded-md p-4"
            >
              {/* Product Info */}
              <div className="mb-4 md:mb-0">
                <p className="text-xl md:text-2xl font-semibold">
                  Product Title: {product.name}
                </p>
                <p className="text-base md:text-xl mt-2">
                  Original Price: ${product.old_price}
                </p>
                <p className="text-base md:text-xl">
                  Offer Price: ${product.new_price}
                </p>
                <p className="text-base md:text-xl">
                  Category: {product.category}
                </p>
                <p className="text-base md:text-xl">
                  Cloth Type: {product.cloth_type}
                </p>
                <button
                  onClick={() => {
                    RemoveProduct(product.id);
                    toast({
                      colorScheme:'red',
                      position: 'top',
          title: 'Product Deleted ',
          description: "Product Successfully Deleted",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
                  }}
                  className="bg-red-700 px-3 py-1 rounded-md text-white mt-3 cursor-pointer"
                >
                  Remove
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-auto">
                <img
                  src={product.image}
                  alt="preview"
                  className="h-40 w-full md:w-40 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
