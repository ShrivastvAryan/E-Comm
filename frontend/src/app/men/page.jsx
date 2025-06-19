'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Men = () => {
  const [men, setMen] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/menproducts');
        const data = await res.json();
        setMen(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-5xl text-center block pt-10 pb-10">Collections Of Men</h1>
      <div className="h-auto w-full md:w-[90vw] flex gap-4 md:mx-auto">
        <div className=" w-full md:w-[90vw] grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:mx-auto">
          {men.map((item, index) => (
            <div key={index} className="w-full h-44 sm:h-52 md:h-64 lg:h-72 shadow-lg">
              <div className="w-full h-[70%] flex items-center justify-center relative">
                {/* Assuming item.image is a URL */}
                <Image src={item.image} alt={item.name} className="h-full w-full object-cover" fill/>
              </div>
              <div className="w-full h-[30%] text-sm pl-2 ">
                <p className='font-semibold'>{item.name}</p>
                <p>₹{item.new_price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Men;
