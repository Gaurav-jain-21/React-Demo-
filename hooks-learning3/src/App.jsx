import React from "react";
import { createContext } from "react";
import ComponentA from "./components/ComponentA.jsx";
export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "Gaurav jain";
  const age = 22;
  return (
    <Data.Provider value={name}>
      <Data1.Provider value={age}>
        <ComponentA />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default App;
