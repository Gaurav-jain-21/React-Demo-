import { useState, useEffect } from "react";
const Example5 = () => {
  const [name, setName] = useState(() => {
    const saveName = localStorage.getItem("name");
    return saveName ? JSON.parse(saveName) : "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClear = () => setName("");
  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};
export default Example5;
