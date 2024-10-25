import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesCast } from '../../services/api';

import css from './MovieCast.module.css';
import { InfinitySpin } from 'react-loader-spinner';

const MovieCast = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const futchMoviesCast = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await moviesCast(movieId);
        setMovie(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    futchMoviesCast();
  }, [movieId]);

  const defaultImg =
    '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>';

  return (
    <div>
      <ul className={css.list}>
        {movie &&
          movie.map(mov => (
            <div key={mov.id}>
              <h2>{mov.name}</h2>
              <img
                src={
                  mov.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${mov.profile_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
              ></img>
            </div>
          ))}
      </ul>
      {loading && (
        <div>
          <InfinitySpin />
        </div>
      )}
      {error && <p>Error:&quot;{error}&quot</p>}
    </div>
  );
};

export default MovieCast;
