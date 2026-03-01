import { useRef } from "react";

const Example1 = () => {
  const inputElement = useRef(null);
  console.log(inputElement);
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Gaurav";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus & Write Gaurav</button>
    </div>
  );
};
export default Example1;
