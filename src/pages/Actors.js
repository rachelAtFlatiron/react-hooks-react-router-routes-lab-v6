import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Actors() {

  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(data => setActors(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {
          actors.map(el => {
            return (
              <article key={el.id}>
                <h2>{el.name}</h2>
                <ul>
                  {
                    el.movies.map((movie, id) => <li key={id}>{movie}</li>)
                  }
                </ul>
              </article>
            )
          })
        }
      </main>
    </>
  );
};

export default Actors;
