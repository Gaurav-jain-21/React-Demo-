import React, {useState} from 'react'

const ContectDetail = () => {
    const [contect, setContect]=useState([]);
    const [value, setValue]=useState('');
    const handleChange=()=> setContect([...contect,value])
  return (
    <div>
        <h1> this is the contect book of yours</h1>
        Enter the name : <input type ="text" name="name" value={value}  onChange={(e) => setValue(e.target.value)}></input>
        <br/>
        <button type="submit" onClick={handleChange} name="add">add contect</button>


        {contect.map((c, index)=>(
            <li key={index}>{c}</li>
        ))}
    </div>
  )
}

export default ContectDetail