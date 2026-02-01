import React from 'react'

const Action = () => {
    const copyHandler=()=>{
        console.log("stop copying things");
    }
  return (
    <div> 
        <button onClick={()=>console.log("hello")}>Click</button>
        <br/>
        <p onCopy={copyHandler}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab repudiandae sapiente vel expedita, tempora omnis ipsum cupiditate ducimus voluptatem voluptas placeat, neque ratione. Ipsam doloremque cupiditate cum molestias dolorem magnam facere ipsa.</p>
    </div>
  )
}

export default Action