import { useEffect, useState } from "react"
import { getMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";


const HomePage = () => {

  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
 
  console.log(error);

  useEffect(() => {
   async function fetchMovies () {
      try {
        const data = await getMovies();
        setMovies(data);
    
      } catch (error) {
        setError(error.message);
      } 
    }
    fetchMovies();
  },[])

  return (
    <div>
      <h1>Trending today</h1>
< MovieList movies={movies} />

    </div>
  )
}

export default HomePage