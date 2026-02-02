import React from "react";

const ValidPass = () => <h1>Valid Password</h1>;
const InvalidPass = () => <h1>Invalid Password</h1>;

const Example1 = ({ isValid }) => {
  if (isValid) {
    return <ValidPass />;
  }
  return <InvalidPass />;
};

export default Example1;
