import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Product = () => {
  const [products, setProducts] = useState([]);

  async function fetchProduct(){
    
    try {
        const request = await fetch("https://fakestoreapi.com/products");
        const response = await request.json();
        console.log(response)
        if(request.ok){
            setProducts(response);
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [])
    
  return (
    <div>
        {products.map((product, index) => (
            <div key={index}>
              {product.title}
            </div>
        ))}
    </div>
  )
}

export default Product