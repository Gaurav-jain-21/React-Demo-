import React , {useState} from 'react'

const SecondHook = () => {
    const [friends ,setFriends]=useState(['Alex','John'])
    const addOneFriend=()=> setFriends([...friends,"Gaurav Jain"]);
  return (
    <div>
        {friends.map((f,index)=>(
            <li key={index}>{f}</li>
        ))}
        <button onClick={addOneFriend}>Add new friend</button>
    </div>
  )
}

export default SecondHook