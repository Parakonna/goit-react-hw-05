import { useEffect, useState } from 'react';

import css from './MowiesPage.module.css';
import { searchMovies } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(error);
  const [searchParams, setSearchParams] = useSearchParams('');

  const searchValue = searchParams.get('q');

  const onSearch = query => {
    setSearchParams({ q: query });
  };

  useEffect(() => {
    const searchMoviesQuery = async () => {
      if (!searchValue) return;
      try {
        setLoading(true);
        setError(null);
        const data = await searchMovies(searchValue);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMoviesQuery();
  }, [searchValue]);

  return (
    <div className={css.container}>
      <SearchForm onSubmit={onSearch} />
      {movies && <MovieList movies={movies} />}
      {loading && (
        <div>
          <InfinitySpin />
        </div>
      )}
      {error && <p>Error:&quot;{error}&quot</p>}
    </div>
  );
};

export default MoviesPage;
