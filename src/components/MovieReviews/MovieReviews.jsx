import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesReviews } from '../../services/api';

import { InfinitySpin } from 'react-loader-spinner';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const futchMoviesReviews = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        setError(null);
        const data = await moviesReviews(movieId);
        console.log(data);
        setMovie(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    futchMoviesReviews();
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      {movie !== null && <h2 className={css.title}>{movie.author}</h2>}
      {movie !== null && <p className={css.text}>{movie.content}</p>}
      {loading && (
        <div>
          <InfinitySpin />
        </div>
      )}
      {error && <p>Error:&quot;{error}&quot</p>}
    </div>
  );
};

export default MovieReviews;
