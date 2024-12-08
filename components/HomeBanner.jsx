import React from 'react';
import Image from 'next/image';

const HomeContent = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-80">
        <Image
          src="/Screenshot1.jpg" 
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-xl font-bold">First Look</h2>
          <h1 className="text-4xl font-extrabold">NIKE AIR MAX PULSE</h1>
          <p className="text-sm mt-2">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse.</p>
          <div className="mt-4 space-x-4">
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
              Notify Me
            </button>
            <button className="px-4 py-2 border border-black rounded hover:bg-gray-200">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Best of Air Max</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-lg p-4 text-center">
            <Image
              src="/images1.jpg" // Replace with the correct image name
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
            />
            <h3 className="mt-4 font-medium">Nike Air Max Pulse</h3>
            <p className="text-sm text-gray-600">Women's Shoes</p>
            <p className="text-sm font-bold mt-2">₹13,995</p>
          </div>
          <div className="shadow-lg p-4 text-center">
            <Image
              src="/images2.jpg" // Replace with the correct image name
              alt="Nike Air Max Pulse"
              width={300}
              height={300}
            />
            <h3 className="mt-4 font-medium">Nike Air Max Pulse</h3>
            <p className="text-sm text-gray-600">Men's Shoes</p>
            <p className="text-sm font-bold mt-2">₹13,995</p>
          </div>
          <div className="shadow-lg p-4 text-center">
            <Image
              src="/shoe3.jpg" // Replace with the correct image name
              alt="Nike Air Max 97 SE"
              width={300}
              height={300}
            />
            <h3 className="mt-4 font-medium">Nike Air Max 97 SE</h3>
            <p className="text-sm text-gray-600">Men's Shoes</p>
            <p className="text-sm font-bold mt-2">₹16,995</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;


