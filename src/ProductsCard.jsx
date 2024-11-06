import React from "react";
import { useState } from "react";
function ProductsCard({ product }) {
  const [counts, setCounts] = useState(0);

  const increase = () => {
    setCounts(counts + 1);
  };
  const decrease = () => {
    if (counts > 0) {
      setCounts(counts - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 m-4 text-center">
    <h1 className="text-xl font-bold mb-2">{product.title}</h1>
    {/* <p className="text-gray-600 mb-4">{product.description}</p> */}
  
    <img
      className="w-[50%] h-[200px] object-cover mx-auto mb-4"
      src={product.image}
      alt={product.title}
    />
    <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
  
    <div className="flex items-center justify-center space-x-4">
      {/* "+" Button with animations */}
      <button
        onClick={() => decrease()}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transform transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        -
      </button>
      <p className="text-lg font-semibold">{counts}</p>
      <button
        onClick={() => increase()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transform transition-transform duration-200 hover:scale-110 active:scale-95"
      >
        +
      </button>
      {/* "-" Button with animations */}
    </div>
  </div>
  
  );
}

export default ProductsCard;
