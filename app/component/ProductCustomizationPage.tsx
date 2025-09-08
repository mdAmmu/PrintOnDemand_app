"use client"
import React, { useState } from "react";


const ProductCustomizationPage = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [customText, setCustomText] = useState("");
  const [uploadedImage, setUploadedImage] = useState<any>(null);

  // Handle image upload
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Customize Your Product</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Product Preview */}
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <div className="relative w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Product Mockup */}
            <img
              src={`https://via.placeholder.com/250x250.png/${selectedColor}/fff?text=T-Shirt`}
              alt="Product"
              className="rounded-lg"
            />

            {/* Custom Text Overlay */}
            {customText && (
              <p className="absolute text-lg font-bold text-black bg-white/70 px-2 py-1 rounded">
                {customText}
              </p>
            )}

            {/* Uploaded Image Overlay */}
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="Uploaded Design"
                className="absolute w-20 h-20 object-contain"
              />
            )}
          </div>
          <p className="mt-4 font-medium text-gray-600">Preview</p>
        </div>

        {/* Right: Customization Options */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Customization Options</h2>

          {/* Select Color */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Choose Color:</label>
            <div className="flex gap-3">
              {["white", "black", "red", "blue", "green"].map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? "border-blue-500" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Custom Text */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Add Custom Text:</label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Enter your text"
              className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Upload Image */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Upload Design/Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block font-medium mb-2">Select Size:</label>
            <select className="w-full border px-3 py-2 rounded-lg focus:ring focus:ring-blue-300">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>
          </div>

          {/* Add to Cart */}
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizationPage;
