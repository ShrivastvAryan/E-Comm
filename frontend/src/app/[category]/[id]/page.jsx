'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

const ProductPage = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
 
   const ChangeCart = async (id) => {
    try {
    const response = await fetch('http://localhost:5000/addcart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id:id}),
    });

    const data = await response.json();
    alert("Added to Cart")
    console.log("Cart response:", data);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};
     const [size, setSize] = useState("S");
  
    const sizes = ["S", "M", "L", "XL"];
  

  useEffect(() => {
  const fetchSingleProduct = async () => {
    try {
      const res = await fetch(`http://localhost:5000/${category}/products/${id}`);
      const data = await res.json();
      setProduct(data); // Directly set the product
    } catch (err) {
      console.error('Error fetching single product:', err);
    }
  };

  if (category && id) fetchSingleProduct();
}, [category, id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-screen h-auto mx-auto mt-2 px-2 sm:px-4 md:px-8 lg:flex lg:justify-center">

      <div className="w-full lg:w-[50%]">
        <div className="w-full h-[40vh] sm:h-[50vh] md:h-[80vh] lg:h-[80vh] rounded-lg  lg:mt-3 relative">
                <Image src={product.image} alt={product.name} fill className="object-contain" />
        </div>
      </div>

      <div className="w-full lg:w-[50%] lg:ml-6 mt-4 lg:mt-3 rounded-sm">
        <div className="p-2 pt-4">
          <p className="text-base sm:text-lg font-medium">{product.name}</p>
          <p className="pt-2 text-sm sm:text-base">
            MRP: <span className="font-semibold text-base sm:text-lg">₹{product.new_price}</span>
          </p>

          <div className="pt-4">
            <p className="font-semibold text-sm sm:text-base">Select Size</p>
            <div className="pt-2 gap-2 flex flex-wrap sm:flex-nowrap">
              {sizes.map((s) => (
                <span
                  onClick={()=>setSize(s)}
                  key={s}
                 className={`px-4 py-2 rounded-lg border
            ${size === s ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}
            transition duration-200 cursor-pointer`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-auto rounded-2xl border border-gray-300 mt-8 p-3 bg-white">
            <h1 className="font-semibold text-sm sm:text-base">Description</h1>
            <p className="text-sm mt-1">Fabric: {product.cloth_type}</p>
            <p className="text-sm mt-1 text-gray-600">
             {product.description}
            </p>
          </div>

          <button  onClick={() => ChangeCart(product.id)} className="p-3 w-full bg-blue-500 text-white mt-10 rounded-2xl hover:bg-blue-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default ProductPage;

