import { useEffect, useState } from 'react';
import { getMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

import { InfinitySpin } from 'react-loader-spinner';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className={css.home}>
      <h1 className={css.titel}>Trending today</h1>
      <MovieList movies={movies} />
      {loading && (
        <div>
          <InfinitySpin />
        </div>
      )}
      {error && <p>Error:&quot;{error}&quot</p>}
    </div>
  );
};

export default HomePage;
