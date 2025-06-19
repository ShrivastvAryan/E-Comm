'use client';
import React from "react";

const Product = () => {
  return (
    <div className="w-screen h-auto mx-auto mt-2 px-2 sm:px-4 md:px-8 lg:flex lg:justify-center">

      {/* Product Image */}
      <div className="w-full lg:w-[50%]">
        <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] bg-slate-400 rounded-lg"></div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-[50%] bg-slate-100 lg:ml-6 mt-4 lg:mt-0">
        <div className="p-2 pt-4">
          <p className="text-base sm:text-lg font-medium">Roadster Tshirt Relaxed Fit</p>
          <p className="pt-2 text-sm sm:text-base">
            MRP: <span className="font-semibold text-base sm:text-lg">₹800</span>
          </p>

          {/* Sizes */}
          <div className="pt-4">
            <p className="font-semibold text-sm sm:text-base">Select Size</p>
            <div className="pt-2 gap-2 flex flex-wrap sm:flex-nowrap">
              {["S", "M", "L", "XL"].map((size) => (
                <span
                  key={size}
                  className="p-2 border border-gray-500 rounded-2xl text-sm sm:text-base cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="w-full h-auto rounded-2xl border border-gray-300 mt-8 p-3 bg-white">
            <h1 className="font-semibold text-sm sm:text-base">Description</h1>
            <p className="text-sm mt-1">Fabric: Cotton</p>
            <p className="text-sm mt-1 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo facere unde
              aspernatur nesciunt sunt ipsa. Velit quis veniam unde deserunt delectus corrupti
              inventore beatae exercitationem rem.
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="p-3 w-full bg-blue-500 text-white mt-10 rounded-2xl hover:bg-blue-600 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
