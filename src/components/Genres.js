import React from 'react';
import axios from 'axios';

function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage
}) {

    const genresResponse = async() => {
        const { data } = await axios.get(``)
    }

  return <>
  
  </>;
}

export default Genres;
