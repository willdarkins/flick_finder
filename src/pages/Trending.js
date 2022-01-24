import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ContentCard from '../components/ContentCard';

function Trending() {

  const [content, setContent] = useState([]);
//destructuring api response to get data variable out of the promise
  const trendingResponse = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
  setContent(data.results)
  }

  useEffect(() => {
    trendingResponse();

  }, []);

  return (
    <>
      <span className='pageTitle'>Trending</span>
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

    </>
  )
}

const TrendingStyles = styled.div`
  .trending{

  }
`

export default Trending;
