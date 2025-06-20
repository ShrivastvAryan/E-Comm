'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/${category}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    if (!category) {
      return <p>Loading......</p>
    }
      fetchCategoryProducts();
  }, [category]);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center capitalize my-6 pb-2">
        Collections of {category}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <Link href={`/${category}/${item.id}`} key={item.id}>
            <div className="w-full h-80 sm:h-52 md:h-64 lg:h-72 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative w-full h-[70%] bg-gray-50 flex items-center justify-center">
           <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain"
            />
           </div>
           <div className="p-3 text-sm lg:text-base">
          <p className="font-semibold text-gray-800 truncate">{item.name}</p>
         <span className="font-medium mt-1  text-gray-500">MRP:</span><span className="font-medium mt-1 line-through text-gray-500">₹{item.old_price}</span><span className="text-black font-medium mt-1 pl-1">₹{item.new_price}</span>
           </div>
           </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
