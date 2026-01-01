import React from 'react'

const Expressions = () => {
    const myName="Gaurav Kumar"
    const multiply= (a,b) => a*b;
    const specialClass ="simple-class";
  return (
    <div>
        <p>2 + 2 ={2+2}</p>
        <h1>My name is {myName}</h1>
        <p> My friends List is : {["Ram", "Ankit","Vikash"]}</p>
        <p> 5 * 5 = {multiply(5,5)} </p>
        <p className={specialClass}>This is special class</p>
    </div>
  )
}

export default Expressions
