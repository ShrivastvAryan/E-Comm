import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <div className="lg:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block w-full lg:w-40 p-4 lg:h-screen`}
      >
        <div className="bg-blue-300 w-full p-4 m-4 rounded-md font-semibold cursor-pointer text-center">
          <Link href="/">Add Product</Link>
        </div>
        <div className="bg-blue-300 w-full p-4 m-4 rounded-md font-semibold cursor-pointer text-center">
          <Link href="/productlist">Product List</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
