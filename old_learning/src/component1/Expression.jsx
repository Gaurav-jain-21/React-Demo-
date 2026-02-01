import React from 'react'

const Expression = () => {
    const myName="Gaurav Jain";
    const add=(a,b)=>{
        return a*b;
    }
  return (
    <div>
        <p> 2+2={2+2}</p>
        <h1>{myName}</h1>
        <p> 2* 3={add(2,3)}</p>
    </div>
  )
}

export default Expression
