import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.item}>
      {movies !== null &&
        movies.map(movie => (
          <div className={css.link} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <h2>{movie.original_title}</h2>
            </Link>
          </div>
        ))}
    </ul>
  );
};

export default MovieList;
