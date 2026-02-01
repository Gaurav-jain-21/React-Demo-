import React from 'react'

const ImageProps = (props) => {
  return (
    <div>
      <h1> Hello {props.name} </h1>
      <h2> Age: {props.age}</h2>
      <h3> year: {props.year}</h3>
    </div>
  )
}

export default ImageProps
