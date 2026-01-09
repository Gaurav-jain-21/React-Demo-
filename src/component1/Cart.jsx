import React from 'react'

const Cart = () => {
    const items=['Wireless Earbuds','Power Bank','New SSD','Hoddie'];
  return (
    <div>
        <h1> Cart </h1>
        {items.length>0 && <h2>you have {items.length} items in your cart</h2>}
        <ul>
            <h4> Products </h4>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Cart