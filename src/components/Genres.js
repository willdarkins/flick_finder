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
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genre.filter((i) => i.id !== genre.id))
        setPage(1);
    }
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
        {selectedGenres && selectedGenres.map((genre) => (
            <Chip
                key={genre.id}
                label={genre.name}
                style={{ margin: 2 }}
                clickable
                variant="outlined"
                color='primary'
                onClick={()=>handleAdd(genre)}
            />
        ))}
        {genres && genres.map((genre) => (
            <Chip
                key={genre.id}
                label={genre.name}
                style={{ margin: 2 }}
                clickable
                variant="outlined"
            />
        ))}
    </GenreStyles>;
}

const GenreStyles = styled.div`
    padding: 6px 0;
`

export default Genres;
