const initialState = { count: 0 };
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
      return { count: state.count + action.payload };
    case "decrementByAmount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
import { useReducer, useState } from "react";

const Example2 = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleIncementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +inputValue });
    setInputValue(0);
  };
  //   const handleReset=()=>dispatch({type:})
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {/* <button onClick={handleReset}>Reset</button> */}
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter the number"
        />
        <button onClick={handleIncementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Sub</button>
      </div>
    </div>
  );
};
export default Example2;
