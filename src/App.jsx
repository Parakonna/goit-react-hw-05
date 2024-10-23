import { Route, Routes, useParams } from "react-router-dom"
import HomePage from "./page/HomePage"
import MovieDetailsPage from "./page/MovieDetailsPage"
import MoviesPage from "./page/MoviesPage"
import NotFoundPage from "./page/NotFoundPage"
import Navigation from "./components/Navigation/Navigation"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"


const App = () => {

  return (

    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="//movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path="cast" element={<MovieCast/> } />
          <Route path="reviews" element={<MovieReviews/> } />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
</div>
  )
}

export default App
