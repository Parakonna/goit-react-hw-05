import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { detailsMovies } from '../../services/api';

import css from './MovieDetailsPage.module.css';
import { InfinitySpin } from 'react-loader-spinner';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const futchMoviesId = async () => {
      if (!movieId) return;
      try {
        setLoading(true);
        const data = await detailsMovies(movieId);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    futchMoviesId();
  }, [movieId]);

  const defaultImg =
    '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>';

  const backLink = useRef(location.state ?? '/');

  return (
    <div className={css.container}>
      <Link to={backLink.current} className={css.back}>
        Go back
      </Link>
      {movie !== null && (
        <div>
          <h3>{movie.title}</h3>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          ></img>
          {loading && (
            <div>
              <InfinitySpin />
            </div>
          )}
          {error && <p>Error:&quot;{error}&quot</p>}
        </div>
      )}
      <div>
        <h4 className={css.title}>Overview</h4>
        {movie !== null && <p className={css.text}>{movie.overview}</p>}
      </div>
      <h5>Additional information</h5>
      {movie !== null && (
        <ul>
          <li>
            <Link className={css.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
