import React from "react";

const Example = () => {
  const date = new Date();
  const greet = "Hello";

  return (
    <div>
      <h1>{greet}</h1>
      <p>Date is {date.toLocaleString()}</p>
    </div>
  );
};

export default Example;
