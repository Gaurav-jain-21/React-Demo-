import { useState } from "react";
const Example3 = () => {
  const [movie, setMovie] = useState({
    title: "Avenger",
    ratings: 9,
  });
  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // };
    setMovie({ ...movie, ratings: 5 });
  };
  return (
    <section>
      <h1>{movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  );
};
export default Example3;
