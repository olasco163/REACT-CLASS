import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  async function FetchProduct() {
    try {
      const request = await fetch("https://fakestoreapi.com/products");
      const response = await request.json();
      response.forEach(res => console.log(res.category));
      if (request.ok) {
        setProducts(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchProduct();
  }, []);

 
  return (
    <div>
      <div className="flex justify-between px-28 py-3">
        <div></div>
        <select className="outline-none rounded-md bg-gray-200 py-2 px-8">
          <option value="all">All</option>
          <option value="men">Men clothing</option>
          <option value="women">Women clothing</option>
          <option value="jewery">Jewery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="h-min-36">
            <ProductsCard product={product}  />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Product;
