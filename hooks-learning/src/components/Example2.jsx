import { useState } from "react";

const Todo = () => {
  const [names, setNames] = useState(["ram", "vikash", "ashif", "rahul"]);
  const [newName, setNewName] = useState("");
  const [editName, setEditName] = useState(null);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddOrUpdate = () => {
    if (newName.trim() === "") return;

    if (editName !== null) {
      setNames(names.map((n) => (n === editName ? newName : n)));
      setEditName(null);
    } else {
      setNames([...names, newName]);
    }

    setNewName("");
  };

  const handleDelete = (n) => {
    setNames(names.filter((item) => item !== n));
  };

  const handleEdit = (n) => {
    setNewName(n); 
    setEditName(n); 
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Enter your name"
        value={newName}
        onChange={handleChange}
      />

      <button onClick={handleAddOrUpdate}>
        {editName ? "Update Name" : "Add Name"}
      </button>

      <h3>Todo List</h3>
      <ul>
        {names.map((n, index) => (
          <li key={index}>
            <h4>{n}</h4>
            <button onClick={() => handleDelete(n)}>Delete</button>
            <button onClick={() => handleEdit(n)}>Edit</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
