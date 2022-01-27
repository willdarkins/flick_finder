import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Chip } from '@mui/material';

function Genres({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
    const genresResponse = async () => {
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


    return <GenreStyles>
        {selectedGenres.map((genre) => (
            <Chip
                key={genre.id}
                label={genre.name}
                style={{ margin: 2 }}
                clickable
                variant="outlined"
                color='primary'
                onDelete={()=> handleRemove(genre)}
            />
        ))}
        {genres.map((genre) => (
            <Chip
                key={genre.id}
                label={genre.name}
                style={{ margin: 2 }}
                clickable
                variant="outlined"
                onClick={()=>handleAdd(genre)}
            />
        ))}
    </GenreStyles>;
}

const GenreStyles = styled.div`
    padding: 6px 0;
`

export default Genres;
