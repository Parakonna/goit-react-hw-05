import { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

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
    <div>
      <h1>Trending today</h1>
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
