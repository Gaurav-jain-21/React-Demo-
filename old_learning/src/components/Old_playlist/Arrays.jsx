import React from 'react'

const Arrays = () => {
    const users=[
        {id:1 , name: "Alice" , age: 25},
        {id:2 , name: "Bob" , age: 30},
        {id:3 , name: "Charlie" , age: 35}
    ]
  return (
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h1>Name: {user.name}</h1>
                <p>Age: {user.age}</p>
                <p> id: {user.id}</p>
            </div>
        ))}
    </div>
    
  );
}

export default Arrays
