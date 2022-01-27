import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContentCard from '../components/ContentCard';
import PageScroll from '../components/PageScroll';

function Trending() {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([]);
  //destructuring api response to get data variable out of the promise
  const trendingResponse = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    
    setContent(data.results)
  }

  useEffect(() => {
    trendingResponse();
  }, [page]);

  return (
    <TrendingStyles>
      <span className='pageTitle'>Trending 🔥</span>
      <div className='trending'>
        {/* validating that if there's content to display, each object should be mapped acorss the cards */}
        {/* also sending all the data from content variable to the ContentCard component */}
        {content && content.map((i) => <ContentCard
          key={i.id}
          id={i.id}
          poster={i.poster_path}
          title={i.title || i.name}
          date={i.first_air_date || i.release_date}
          media_type={i.media_type}
          vote_average={i.vote_average} />)}
      </div>
      <PageScroll setPage={setPage}/>
    </TrendingStyles>
  )
}

const TrendingStyles = styled.div`
  .trending{
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
  @media (max-width: 100px){
    .pageTitle{
      font-size: 6.4vw;
    }
  }
`

export default Trending;
