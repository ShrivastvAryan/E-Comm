'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Select, Button } from "@chakra-ui/react";

const Men = () => {
  const [tshirt, setUseTshirt] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    price: 'High to Low',
    popularity: 'High to Low',
  });

  // Track cart status for each item by index
  const [cartStatus, setCartStatus] = useState({});

  useEffect(() => {
    const fetchtshirts = async () => {
      try {
        const response = await fetch("/data/tshirt.json");
        const data = await response.json();
        setUseTshirt(data);

      } catch (error) {
        console.error("Failed fetching");
      }

    };
    fetchtshirts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      value === 'option1' ? 'High to Low' : 'Low to High';
    setSortOptions((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleReset = () => {
    setSortOptions({
      price: 'High to Low',
      popularity: 'High to Low',
    });
  };

  const handleClick = (index) => {
    setCartStatus((prev) => ({
      ...prev,
      [index]: true, // mark this item as in cart
    }));
  };

  const getSortedTshirts = () => {
    let sorted = [...tshirt];

    // Sort by price
    sorted.sort((a, b) =>
      sortOptions.price === 'Low to High' ? a.price - b.price : b.price - a.price
    );

    // Then by popularity
    sorted.sort((a, b) =>
      sortOptions.popularity === 'Low to High'
        ? a.popularity - b.popularity
        : b.popularity - a.popularity
    );

    return sorted;
  };

  return (
    <>
      <div className="w-screen h-auto flex justify-center items-center pt-4 pb-1">
        <div className="w-[90vw] h-auto rounded-md flex flex-col ">
          <div className="h-auto w-full p-2 flex flex-row">
            Price: up to down
            <div className="w-full ml-2">
              <Select
                size="xs"
                className="rounded-lg bg-blue-300"
                name="price"
                value={sortOptions.price}
                onChange={handleChange}
              >
                <option value="option1">High to Low</option>
                <option value="option2">Low to High</option>
              </Select>
            </div>
          </div>

          <div className="h-auto w-full p-2 flex flex-row">
            Popularity:
            <div className="w-full pl-2">
              <Select
                size="xs"
                className="rounded-lg bg-blue-300"
                name="popularity"
                value={sortOptions.popularity}
                onChange={handleChange}
              >
                <option value="option1">High to Low</option>
                <option value="option2">Low to High</option>
              </Select>
            </div>
          </div>

          <div className="p-2">
            <Button size="xs" className="bg-blue-400" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>

      <h1 className="block text-3xl text-center pt-2 font-semibold">T-Shirts</h1>
      <div className="h-auto w-screen flex flex-row flex-wrap gap-2 p-2">
        {getSortedTshirts().map((list, index) => (
          <div
            key={index}
            className="w-[45vw] h-64 bg-slate-100 flex flex-col rounded-lg mx-auto my-4 scroll-animate"
          >
            <div className="bg-red-100 w-full h-[70%] relative">
              <Image src={list.image} fill alt={list.name} className="object-cover" />
            </div>

            <div className="w-[70%] p-2">
              <p className="pt-1 text-sm font-semibold">{list.name}</p>
              <p className="pt-1 text-sm ">${list.price}</p>
            </div>

            <Button
              className="mt-2 w-[90%] m-2 mb-4"
              colorScheme={cartStatus[index] ? "gray" : "blue"}
              size="sm"
              onClick={() => handleClick(index)}
              isDisabled={cartStatus[index]}
            >
              {cartStatus[index] ? "Added to cart" : "Add to cart"}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Men;
