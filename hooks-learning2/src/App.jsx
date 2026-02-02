import { useState, useEffect } from "react";
const App = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    document.title = `Increment ${value}`;
  }, [value]); //if initialize empty array this function only fire onece
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </div>
  );
};
export default App;
