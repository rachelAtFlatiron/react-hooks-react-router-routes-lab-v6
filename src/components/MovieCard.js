import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        <h3>{movie.time} minutes</h3>
        {
          movie.genres.map(el => <p>{el}</p>)
        }
    </article>
  );
};

export default MovieCard;