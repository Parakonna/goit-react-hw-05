import { Suspense, useEffect, useState } from "react";
import {  Link, Outlet, useParams } from "react-router-dom"
import { detailsMovies } from "../services/api";


const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);

 
  const { movieId } = useParams();
  
  useEffect(() => {
    const futchMoviesId = async () => {
      if (!movieId) return;
      try {
        const data = await detailsMovies(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) { setError(error.message); }
    }
    futchMoviesId();
  }, [movieId]) 
  
  const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
  
  return (
    
    
    <div>
      <div>
       <h3>{movie.title}</h3>
        <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: defaultImg}
             width={250}
             alt="poster"></img>
    </div>
      <div>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      </div>
      <h5>Additional information</h5>
<ul>
        <li>
     <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul> 
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
    
  )
}

export default MovieDetailsPage

