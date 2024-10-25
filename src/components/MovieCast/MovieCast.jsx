import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesCast } from '../../services/api';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
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
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    futchMoviesCast();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
      <ul className={css.list}>
        {movie &&
          movie.map(mov => (
            <li className={css.item} key={mov.id}>
              <div className={css.itemData}>
                <h2 className={css.title}>{mov.name}</h2>
                <img
                  className={css.img}
                  src={
                    mov.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${mov.profile_path}`
                      : defaultImg
                  }
                  width={250}
                  alt="poster"
                ></img>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCast;
