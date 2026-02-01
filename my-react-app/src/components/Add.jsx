import React from "react";

const Add = () => {
  const name = "Gaurav Kumar Borad";
  const multiply = (a, b) => a * b;
  return (
    <div>
      <p2> 2 + 2 = {2 + 2}</p2>
      <p>my name is {name}</p>
      <p> 2 * 2 = {multiply(2, 2)}</p>
    </div>
  );
};

export default Add;
