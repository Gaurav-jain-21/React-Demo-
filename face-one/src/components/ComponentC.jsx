import React from "react";
import { Data, Data1 } from "../App.jsx";

const ComponentC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return (
          <Data1.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and I'm {age} year old.
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentC;
