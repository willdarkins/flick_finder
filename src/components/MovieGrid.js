import React from 'react';

function MovieGrid(props) {
    return <>
    {props.movies.map((movie)=> {
        <div>
            <img src={movie.poster_path} alt='movie poster'></img>
        </div>
    } )}
    </>
}

export default MovieGrid;
