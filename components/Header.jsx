'use client';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* Top Section (Jordan Logo and Top Navigation) */}
      <div className="bg-gray-100 py-2 px-4 flex justify-between items-center text-sm">
        {/* Left Logo (Jordan Jumpman Logo) */}
        <div className="flex items-center">
          <Image
            src="/new.png" // Replace with the actual logo file
            alt="Jordan Logo"
            width={28}
            height={28}
          />
        </div>

        {/* Top Navigation Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Find a Store</a>
          <a href="#" className="text-gray-600 hover:text-black">Help</a>
          <a href="#" className="text-gray-600 hover:text-black">Join Us</a>
          <a href="#" className="text-gray-600 hover:text-black">Sign In</a>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Nike Logo */}
        <div className="flex items-center">
          <Image 
            src="/Logo_nike.jpg" 
            alt="Nike Logo" 
            width={80} 
            height={50} 
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 text-sm w-full">
          <a href="#" className="text-gray-700 hover:text-black">New & Featured</a>
          <a href="#" className="text-gray-700 hover:text-black">Men</a>
          <a href="#" className="text-gray-700 hover:text-black">Women</a>
          <a href="#" className="text-gray-700 hover:text-black">Kids</a>
          <a href="#" className="text-gray-700 hover:text-black">Sale</a>
          <a href="#" className="text-gray-700 hover:text-black">SNKRS</a>
        </nav>

        {/* Search, Heart, and Cart Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full py-1 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Heart Icon */}
          <div className="cursor-pointer">
            <Image
              src="/heart.png"
              alt="Favorites"
              width={24}
              height={24}
            />
          </div>

          {/* Cart Icon */}
          <div className="cursor-pointer">
            <Image
              src="/shopping-cart.jpg"
              alt="Cart"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
