import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesCast } from "../../services/api";


const MovieCast = () => {
    const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);
  console.log(movie)

 
  const { movieId } = useParams();
  
  useEffect(() => {
    const futchMoviesCast = async () => {
      if (!movieId) return;
      try {
        const data = await moviesCast(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) { setError(error.message); }
    }
    futchMoviesCast();
  }, [movieId]) 
  return (
    <div>MovieCast</div>
  )
}

export default MovieCast