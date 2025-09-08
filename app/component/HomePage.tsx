"use client"
import React from "react";
import { useRouter } from "next/navigation";
// import CustomizePage from "../customize/Page";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const HomePage = ({ router }: { router: any }) => {
    const handleProductClick = (productType: string) => {
      // Navigate to /customize with query
      router.push(`/customize?product=${productType}`);
    };

  return (
    <div className="bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
        <h1 className="text-xl font-bold">Print on Demand</h1>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-600">Shop</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <Link href="/cart_page"><FaShoppingCart /></Link>
          {/* <button className="px-4 py-2 border rounded hover:bg-gray-100">Sign in</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Register</button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">
            Create and sell custom products
          </h2>
          <p className="text-gray-600 mb-6">
            Design and sell custom t-shirts, hoodies, mugs, and more.
          </p>
          <button
            onClick={() => router.push('/customize')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
          >
            Start Designing
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-lg p-6 flex gap-6 items-center">
            <Image src="/flower_tshirt_mug.png" alt="T-shirt" width={250} height={250} />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div 
            className="cursor-pointer hover:scale-105 transition-transform bg-gray-300 rounded-lg py-10"
            onClick={() => handleProductClick('/t-shirt')}
          >
            <Image className="mx-auto mb-2" src="/t-shirt.png" alt="T-shirt" width={100} height={100} />
            <p className="font-medium">T-Shirts</p>
          </div>
          <div 
            className="cursor-pointer hover:scale-105 transition-transform bg-gray-300  rounded-lg py-10"
            onClick={() => handleProductClick('hoodie')}
          >
            <Image className="mx-auto mb-2 " src="/hoodie.png" alt="T-shirt" width={100} height={100} />
            <p className="font-medium">Hoodies</p>
          </div>
          <div 
            className="cursor-pointer hover:scale-105 transition-transform bg-gray-300 rounded-lg py-10"
            onClick={() => handleProductClick('mug')}
          >
            <Image className="mx-auto mb-2" src="/mug.png" alt="T-shirt" width={100} height={100} />
            <p className="font-medium">Mugs</p>
          </div>
          <div 
            className="cursor-pointer hover:scale-105 transition-transform bg-gray-300 rounded-lg py-10"
            onClick={() => handleProductClick('phone-case')}
          >
           <Image className="mx-auto mb-2" src="/phone_case.png" alt="T-shirt" width={100} height={100} />
            <p className="font-medium">Phone Cases</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="px-8 py-12">
        <h3 className="text-2xl font-bold mb-6">Popular products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            className="border rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push('/customize')}
          >
            <Image className="mx-auto mb-2" src="/t-shirt.png" alt="T-shirt" width={100} height={100} />
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              Customize
            </button>
          </div>
          <div 
            className="border rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push('/customize')}
          >
            <Image className="mx-auto mb-2" src="/t-shirt.png" alt="T-shirt" width={100} height={100} />
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              Customize
            </button>
          </div>
          <div 
            className="border rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push('/customize')}
          >
            <Image className="mx-auto mb-2" src="/t-shirt.png" alt="T-shirt" width={100} height={100} />
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              Customize
            </button>
          </div>
          <div 
            className="border rounded-lg p-4 flex flex-col justify-center items-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push('/customize')}
          >
            <Image className="mx-auto mb-2" src="/t-shirt.png" alt="T-shirt" width={100} height={100} />
            <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              Customize
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
