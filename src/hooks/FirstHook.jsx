import React, {useState, useEffect} from 'react'

const FirstHook = () => {
    const [value, setValue]=useState(0);
    //useEffect hook two arguments first it takes a callback function and dependance array
    useEffect(()=>{
        console.log('call useEffect')
        document.title=`Increment ${value}`
    }) 
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value+1)}>Click me</button>
    </div>
  )
}

export default FirstHook