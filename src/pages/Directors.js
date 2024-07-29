import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirectors(data))
  }, [])
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {
          directors.map(el => {
            return(
              <article key={el.id}>
                <h2>{el.name}</h2>
                <ul>
                  {el.movies.map((movie, id) => <li key={id}>{movie}</li>)}
                </ul>
              </article>
            )
          })
        }
      </main>
    </>
  );
};

export default Directors;
