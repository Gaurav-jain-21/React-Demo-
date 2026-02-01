import React from "react";

const ProductInfo = () => {
  const numbers = [1, 6, 2, 69, 8, 4];
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "in Stock",
  };
  return (
    <div>
      <h1>Name: {product.name} </h1>
      <h1>price: {product.price}</h1>
      <h1> {product.availability}</h1>
      <br />
      {numbers.map((number) => (
        <ul>
          <li key={number}>{number}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;
