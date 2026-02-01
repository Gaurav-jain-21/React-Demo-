import React,{useState} from 'react'

const Switch = () => {
    const [sw, setSw]= useState(false);
  return (
    <di>
        {sw ? <span>Dark</span>: <span>Light</span>}
        <br/>
        <input type="text" key={sw ? 'dark':'light'}/>
        <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </di>
  )
}

export default Switch