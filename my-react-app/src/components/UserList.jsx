import React from "react";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Gaurav",
      age: 25,
    },
    {
      id: 2,
      name: "bob",
      age: 30,
    },
    {
      id: 3,
      name: "chalie",
      age: 40,
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h2>age: {user.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
