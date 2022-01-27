import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContentCard from '../components/ContentCard';
import PageScroll from '../components/PageScroll';


function Movies() {
  const [page, setPage] = useState(1);
  const [content, setcontent] = useState([]);
  // const [numOfPages, setnumOfPages] = useState();

  const movieResponse = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)

    setcontent(data.results)
    console.log(data)
    // setnumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0);
    // let unmounted = false;
    // if(!unmounted){
      movieResponse();
      // eslint-disable-next-line
      // return () => {
      //   unmounted = true;
      // }
    // }
  }, [page]);


  return (
    <MovieStyles>
      <span className='pageTitle'>Movies 🍿</span>
      <div className='movies'>
        {/* validating that if there's content to display, each object should be mapped acorss the cards */}
        {/* also sending all the data from content variable to the ContentCard component */}
        {content && content.map((i) => <ContentCard
          key={i.id}
          id={i.id}
          poster={i.poster_path}
          title={i.title || i.name}
          date={i.first_air_date || i.release_date}
          media_type='movie'
          vote_average={i.vote_average} />)}
      </div>
      <PageScroll setPage={setPage}/>
    </MovieStyles>
  )
}

const MovieStyles = styled.div`
  .movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
  .pageTitle{
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-size: 2vw;
    padding: 4px;
    border-radius: 50px;
    color: var(--font-dark);
  }
  @media (x-width: 100px){
    .pageTitle{
      font-size: 6.4vw;
    }
  }
`

export default Movies;
