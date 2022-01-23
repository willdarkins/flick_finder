import React, { useState } from "react";
require('dotenv').config()
import MovieGrid from './components/MovieGrid'

function App() {
  //holds search results that come back from search
  const [movies, setMovies] = useState([]);

  //calling MovieDB API
  const movieRequest = () => {
    const apiKey= process.env.API_KEY
    const url = `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}`
  }
  return (
    <>
    <MovieGrid movies={movies}/>
    </>
  );
}

export default App;
