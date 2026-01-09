import React,{useState} from 'react'

const FirstHook = () => {
    const [count,setCount]=useState(0);
    const handleClick=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const zero=()=>setCount(count===0);
  return (
    <div>
        <h1>{count}</h1><button onClick={handleClick}>+</button>
        <br></br>
        <button onClick={decrement}>-</button>
        <br></br>
        <button onClick={zero}>0</button>

    </div>
    
  )
}

export default FirstHook