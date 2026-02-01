import React,{useState} from 'react'

const Movies = () => {
    const [movies, setMovies]=useState([
        {id:1, title: "spider Man", rating: 3},
        {id: 2, title: "superman",rating:6}
    ]);
    const handleClick=()=>{
        setMovies(movies.map(m=> m.id === 1? {...movies,title:"john wick 5"}: m));
    }

  return (
    <div>
        {movies.map((m,index)=>(
            <li key={index}>{m.title}</li>
        ))}


       <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Movies