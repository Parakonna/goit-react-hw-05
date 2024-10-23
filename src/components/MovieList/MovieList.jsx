import { Link, useLocation } from "react-router-dom"


const MovieList = ({ movies }) => {
    const location = useLocation();
  return (
      <ul>
         {movies !== null&& movies.map((movie) => (<div key={movie.id 
           }>
             <Link to={`/movies/${movie.id}`} state={location}>
                 <h2>{movie.original_title}</h2>
              </Link>
       </div>))}
    </ul>
  )
}

export default MovieList

 