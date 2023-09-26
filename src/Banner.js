import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';

function truncateString(str, maxLength) {
    if (str && str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    } else {
        return str;
    }
}

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomMovieIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie(request.data.results[randomMovieIndex]);
        }

        fetchData();
    }, []);

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            {/* <div className='logo'>
                <h3>Zaman</h3>
            </div> */}
            <div className='banner-contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <div>
                    <h1 className='banner-description'>
                        {truncateString(movie?.overview, 150)}
                    </h1>
                </div>
            </div>
            <div className='banner-fadebottom'></div>
        </header>
    );
}

export default Banner;
