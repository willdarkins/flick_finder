import React from 'react';
import axios from 'axios';

function Trending() {

  const trendingResponse= async() => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
  }

  return (
  <>
    <span className='pageTitle'>Trending</span>
  </>
  )
}

export default Trending;
