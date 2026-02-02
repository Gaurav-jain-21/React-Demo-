import { useState } from "react";
const Todo = () => {
  const [name, setName] = useState(["ram", "vikash", "ashif", "rahul"]);
  const [new_name, setNewName] = useState("");
  const handleChange1 = (event) => {
    setNewName(event.target.value);
  };
  const handleAddName = () => {
    setName([...name, new_name]);
    setNewName("");
  };
  const handleDelete = (n) => {
    setName(name.filter((f) => f !== n));
  };
  const handleEdit = (n) => {
    setNewName(n);
    setName(name.map((word) => (word === n ? new_name : word)));
  };
  return (
    <section>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange1}
      ></input>
      <button onClick={handleAddName}>Add Name</button>
      <h3>Todo List</h3>
      <ul>
        {name.map((n, index) => (
          <li key={index}>
            <div>
              <h4>{n}</h4>
              <button value={n} onClick={() => handleDelete(n)}>
                Delete name
              </button>
              <button value={n} onClick={() => handleEdit(n)}>
                Edit Name
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Todo;
