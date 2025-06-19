'use client';
import React from "react";
import { useState } from "react";

const Product = () => {

   const [size, setSize] = useState("S");

  const sizes = ["S", "M", "L", "XL"];


  return (
    <div className="w-screen h-auto mx-auto mt-2 px-2 sm:px-4 md:px-8 lg:flex lg:justify-center">

      <div className="w-full lg:w-[50%]">
        <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] bg-slate-400 rounded-lg lg:mt-3"></div>
      </div>

      <div className="w-full lg:w-[50%] lg:ml-6 mt-4 lg:mt-3 rounded-sm">
        <div className="p-2 pt-4">
          <p className="text-base sm:text-lg font-medium">Roadster Tshirt Relaxed Fit</p>
          <p className="pt-2 text-sm sm:text-base">
            MRP: <span className="font-semibold text-base sm:text-lg">₹800</span>
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
            <p className="text-sm mt-1">Fabric: Cotton</p>
            <p className="text-sm mt-1 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo facere unde
              aspernatur nesciunt sunt ipsa. Velit quis veniam unde deserunt delectus corrupti
              inventore beatae exercitationem rem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo facere unde
              aspernatur nesciunt sunt ipsa. Velit quis veniam unde deserunt delectus corrupti
              inventore beatae exercitationem rem.
            </p>
          </div>

          <button className="p-3 w-full bg-blue-500 text-white mt-10 rounded-2xl hover:bg-blue-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
