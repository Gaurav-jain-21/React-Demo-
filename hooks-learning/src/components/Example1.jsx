import { useState } from "react";
const Example1 = () => {
  const [count, setCount] = useState(0);
  let AddHandler = () => {
    setCount(count + 1);
  };
  let SubHandler = () => {
    setCount(count - 1);
  };
  let ZeroHandler = () => {
    setCount(0);
  };
  return (
    <section>
      <h1> counter application</h1>
      <h3>{count}</h3>
      <button onClick={AddHandler}>+</button>
      <button onClick={ZeroHandler}>0</button>
      <button onClick={SubHandler}>-</button>
    </section>
  );
};
export default Example1;
