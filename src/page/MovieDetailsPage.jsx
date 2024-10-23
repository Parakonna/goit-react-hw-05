import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"
import { detailsMovies } from "../services/api";


const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  console.log(error);
  console.log(movie);
 
  const { id } = useParams();
  
  useEffect(() => {
    const futchMoviesId = async () => {
      if (!id) return;
      try {
        const data = await detailsMovies(id);
        console.log(data);
        setMovie(data);
      } catch (error) { setError(error.message); }
    }
    futchMoviesId();
  }, [id]) 
  
  //const defaultImg = '<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>'
  
  return (
    <div>
    
    </div>
    
  )
}

export default MovieDetailsPage

 // <h3>{movie.title}</h3>
 //     <img src={
 //movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: defaultImg
///}
//width={250}
//alt="poster"
///>