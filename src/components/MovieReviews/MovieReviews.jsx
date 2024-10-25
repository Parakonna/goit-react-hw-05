import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesReviews } from '../../services/api';

import { InfinitySpin } from 'react-loader-spinner';

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
        const data = await moviesReviews(movieId);
        console.log(data);
        setMovie(data);
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
      {movie.results > 0 ? (
        <h2>{movie.results[0].author}</h2>
      ) : (
        <p>We do not have any rewiews for this movie.</p>
      )}
      {movie.results > 0 && <p>{movie.results[0].content}</p>}
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