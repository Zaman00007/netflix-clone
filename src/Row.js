import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Rows.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] =useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  
  const opts ={
    height :"390",
    width: "100%",
    playerVars: {

     autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
        .then((url) => {
              const urlParams = new URLSearchParams( new URL(url).search);
              setTrailerUrl(urlParams.get('v'));
            })
        .catch((error) => console.log(error));
    }

  }
  // const handleClick = async (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     try {
  //       const url = await movieTrailer(movie?.name || "");
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //       setTrailerUrl(urlParams.get('v'));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  
  
  // Check if movies is defined before trying to map over it
  console.table(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img key={movie.id} onClick={()=> handleClick(movie)} className={`row-poster ${isLargeRow && "row-posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />

          // <img key={movie.id} className="row-poster" src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.className} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  );
}

export default Row;
