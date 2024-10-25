import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesReviews } from '../../services/api';

import { InfinitySpin } from 'react-loader-spinner';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const futchMoviesReviews = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await moviesReviews(movieId);
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    futchMoviesReviews();
  }, [movieId]);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id}>
            <h2 className={css.title}>{movie.author}</h2>
            <p className={css.text}>{movie.content}</p>
          </div>
        ))
      ) : (
        <p>Sorry</p>
      )}
      {loading && (
        <div>
          <InfinitySpin />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default MovieReviews;
