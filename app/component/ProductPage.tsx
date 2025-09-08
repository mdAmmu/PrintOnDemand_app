// app/product/page.tsx (Next.js 13+ App Router)
"use client"
import Image from "next/image";
import { useState } from "react";
import ProductCustomizationPage from "./ProductCustomizationPage";

export default function ProductPage() {
    const [showCustomizationPage, setShowCustomizationPage] = useState(false);
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-2 gap-10">

                {/* Product Image */}
                <div className="flex items-center justify-center">
                    {!showCustomizationPage ?
                        <Image
                            src="/blue-tshirt.png" // replace with your actual image path
                            alt="Blue Unisex T-Shirt"
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md"
                        /> : <ProductCustomizationPage />}
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-2xl font-semibold mb-2">T shirt Blue Unisex</h1>
                    <p className="text-xl text-gray-800 font-bold mb-4">$14.99</p>
                    <p className="text-gray-600 mb-6">
                        Elevate your everyday look with our classic Blue Cotton Unisex T-Shirt –
                        a perfect blend of comfort, style, and versatility.
                    </p>

                    {/* Sizes */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Size</h3>
                        <div className="flex gap-3">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className="px-4 py-2 border rounded-md hover:bg-gray-100 focus:ring focus:ring-blue-300"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        {!showCustomizationPage &&
                            <button
                                onClick={() => setShowCustomizationPage(true)}
                                className={`flex-1 py-3 rounded-md ${!showCustomizationPage
                                        ? "bg-blue-600 text-white hover:bg-blue-700" // outline variant
                                        : "border border-gray-400 text-gray-700 bg-transparent hover:bg-gray-100"  // default variant
                                    }`}
                            >
                                Customize
                            </button>}

                        {!showCustomizationPage ? (
                            <button className="flex-1 border py-3 rounded-md hover:bg-gray-100">
                                Add To Cart
                            </button>
                        ) : (
                            <button className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                                Add To Cart
                            </button>
                        )}
                    </div>

                    {/* Product Description */}
                    <div className="mt-8">
                        <h3 className="font-medium mb-2">Product Description</h3>
                        <p className="text-gray-600">
                            Elevate your everyday look with our classic Blue Cotton Unisex T-Shirt –
                            a perfect blend of comfort, style, and versatility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
