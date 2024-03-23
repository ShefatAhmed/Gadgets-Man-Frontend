"use client";
import { useState } from "react";

const FillterdProduct = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  console.log(selectedCategory);
  return (
    <div className="flex-col justify-center mb-8 px-5 md:my-32">
      <div className="mr-4 w-full">
        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full text-center"
        >
          <option value="top-rating">Top Rating</option>
          <option value="low-rating">Low Rating</option>
        </select>
      </div>
      <div className="w-full">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="block bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full text-center"
        >
          <option value="headphone">Headphone</option>
          <option value="fan">Rechargeble Fan</option>
          <option value="powerbank">Power Bank</option>
          <option value="gimbal">Gimbal</option>
          <option value="light">Light</option>
          <option value="blower">Electric Blower</option>
        </select>
      </div>
      <div className="w-full">
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="block bg-white border border-gray-400 hover:border-gray-500 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-full text-center"
        >
          <option value="high">Price High {">"} Low</option>
          <option value="low">Price Low {"<"} High</option>
        </select>
      </div>
    </div>
  );
};

export default FillterdProduct;
