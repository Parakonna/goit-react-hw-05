import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./page/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./page/MovieDetailsPage/MovieDetailsPage'),
);
const MoviesPage = lazy(() => import('./page/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews'),
);

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="//movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
