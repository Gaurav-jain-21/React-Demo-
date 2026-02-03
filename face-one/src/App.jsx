import React from "react";
import ComponentA from "./ComponentA.jsx";

const App = () => {
  const name = "Gaurav";
  return (
    <div>
      <ComponentA name={name}/>
    </div>
  );
};

export default App;
