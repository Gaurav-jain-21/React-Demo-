import React from "react";
import Example1 from "./components/Example1.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  return (
    <div>
      <Example1 isValid={true} />
      <br />
      <Cart />
    </div>
  );
};

export default App;
