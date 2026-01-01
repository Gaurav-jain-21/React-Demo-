import React from 'react'

const Greet = () => {
    const greet="hello world";
    const date= new Date();
  return (
    <div>
        <h1>{greet}</h1>
        <p> today is : {date.getDate()}</p>
      
    </div>
  )
}

export default Greet
