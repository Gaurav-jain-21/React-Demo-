import { useState, useEffect } from "react";

const Example1 = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use useEffect");
    document.title = `Increment ${value}`;
  }, [value]);
  return (
    <div>
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>click</button>
    </div>
  );
};

export default Example1;
