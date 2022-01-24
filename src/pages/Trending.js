import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Trending() {

  const [content, setContent] = useState([]);
//destructuring api response to get data variable out of the promise
  const trendingResponse = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
    console.log(data)
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
        {content && content.map((i) => console.log(i))}
      </div>

    </>
  )
}

const TrendingStyles = styled.div`
  .trending{

  }
`

export default Trending;
