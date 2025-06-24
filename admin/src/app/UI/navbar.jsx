'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      href: "/",
      label: "Add Product",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    },
    {
      href: "/productlist",
      label: "Product List",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title Section */}
            <div className="flex items-center space-x-4">
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden group bg-white shadow-lg border border-gray-200 p-2 rounded-xl hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`}></span>
                  <span className={`absolute block h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2v16m14 0h2m-2 0h-8m-5 0H3m2-16h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                </div>
                
                <div className="hidden sm:block">
                  <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Admin Panel
                  </h1>
                  <p className="text-sm text-gray-500 font-medium -mt-1">
                    Product Management System
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href}
                  className="group relative flex items-center space-x-2 px-4 py-2 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                >
                  <div className="flex-shrink-0 p-1 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Section - Actions */}
          </div>
        </div>

        {/* Bottom border gradient */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Sidebar Header */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-8m-5 0H3m2-16h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                  <p className="text-sm text-slate-400">Product Management</p>
                </div>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="p-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center space-x-3 w-full p-4 rounded-xl text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-slate-700 group-hover:bg-white/20 transition-colors duration-200">
                  {item.icon}
                </div>
                
                <span className="font-medium text-base group-hover:translate-x-1 transition-transform duration-200">
                  {item.label}
                </span>

                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 transition-colors duration-200"></div>
              </Link>
            ))}
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;