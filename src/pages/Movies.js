import axios from 'axios';
import React from 'react';

const movieResponse = async() => {
  const { data } = axios.get(`
  https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
}
function Movies() {
  return(
    <>
    <span className='pageTitle'>Movies 🍿</span>
    </>
  )
}

export default Movies;
