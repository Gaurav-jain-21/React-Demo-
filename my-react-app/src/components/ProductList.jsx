import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$5" },
    { id: 2, name: "laptop", price: "$6" },
    { id: 3, name: "computer", price: "$7" },
  ];
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h1>Name: {p.name}</h1>
          <h2>Price: {p.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
