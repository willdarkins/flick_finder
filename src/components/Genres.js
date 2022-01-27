import React, { useEffect } from 'react';
import axios from 'axios';

function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) {

    const genresResponse = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setGenres(data.genres)
    }

    console.log(genres)
    
    useEffect(() => {
        genresResponse();

        return () => {
            setGenres({})
        }
    }, []);
    

  return <>
  
  </>;
}

export default Genres;
