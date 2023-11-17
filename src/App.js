import requests from './requests';
import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import './Banner.css';
import Nav from './Nav'
import './Nav.css'


function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;