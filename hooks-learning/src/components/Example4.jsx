import { useState } from "react";
const Example4 = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Iron Man", ratings: 5 },
    { id: 3, title: "Hulk", ratings: 4 },
  ]);
  const handleClick = () => {
    setMovie(
      movie.map((m) => (m.id === 1 ? { ...movie, title: "Super Man" } : m)),
    );
  };
  return (
    <section>
      {movie.map((m, index) => (
        <li key={index}>{m.title}</li>
      ))}
      <button onClick={handleClick}>Change Name</button>
    </section>
  );
};
export default Example4;
