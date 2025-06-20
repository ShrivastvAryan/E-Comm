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
        const res = await fetch(`http://localhost:5000/${category}products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    if (category) fetchCategoryProducts();
  }, [category]);

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center capitalize my-6">
        Collections of {category}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <Link href={`/${category}/${item.id}`} key={item.id}>
            <div className="shadow-md rounded-md overflow-hidden cursor-pointer">
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-2 text-sm">
                <p className="font-semibold">{item.name}</p>
                <p>₹{item.new_price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
