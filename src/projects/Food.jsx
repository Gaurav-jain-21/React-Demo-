import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Food = () => {
  let foodItem = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk'];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map(item => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Food;
