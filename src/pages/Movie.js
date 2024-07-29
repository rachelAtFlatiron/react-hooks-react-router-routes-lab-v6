import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
function Movie() {
  const {id} = useParams()

  const [movie, setMovie] = useState({genres: []})

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {
          movie.genres.map((el, i) => <span key={i}>{el}</span>)
        }
      </main>
    </>
  );
};

export default Movie;
