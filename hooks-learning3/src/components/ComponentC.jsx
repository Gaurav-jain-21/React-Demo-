import { useContext } from "react";
import { Data, Data1 } from "../App";
const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);
  return (
    <h1>
      my name is {userName} and my age {userAge}
    </h1>
  );
};

export default ComponentC;
