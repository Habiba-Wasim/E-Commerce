'use client';
import React from 'react';
import Image from 'next/image';

const HomeContent = () => {
  return (
    <div>
      {/* Hello Nike App Section */}
      <div className="text-center py-8 bg-gray-50">
        <h1 className="text-3xl font-bold">Hello Nike App</h1>
        <p className="text-gray-600 mt-2">Download the app to access everything Nike.</p>
        <a
          href="c:\Users\Admin\Downloads\Screenshot1.png"
          className="text-blue-500 font-medium mt-1 cursor-pointer hover:underline"
        >
          Get Your Great
        </a>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-96">
        <Image
          src="/Screenshot1.jpg" 
          alt="Nike Banner"
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
};

export default HomeContent;
