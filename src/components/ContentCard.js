import React from 'react';
import styled from 'styled-components';
import { img_300 } from '../config/config';
import unavailable from '../config/images/unavailable.jpg'

//destructed props from Trending.js - which was the API response
function ContentCard({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) {
  return(
      <CardStyles>
      <div className='card'>
        {/* if poster exists, then populate the template with the api data...
        if not, display the imported unavailable poster */}
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable } alt={title}/>
        <span className='title'>{title}</span>
        {/* conditionally rendering the media_type to render a tv show or movie bassed on the property's value */}
        <span className='sub-title'> 
          {media_type === 'tv'? '📺 TV Series': '🎬 Movie'}
          </span>
      </div>
      </CardStyles>
  )
}

const CardStyles = styled.div`
  cursor: pointer;
  .card{
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 5px;
    margin: 5px 0;
    background-color: var(--card-background);
    position: relative;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all .5s ease-in-out;
  }
  .card:hover{
    background-color: #aa96fa;
    color: var(--card-hover-white);
  }
  .title{
    width: 100%;
    text-align: center;
    font-size: 17px;
    padding: 8px 0;
  }
  .sub-title{
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 0 2px;
    padding-bottom: 3px;
  }
@media (max-width: 550px) {
  .card{
    width: 45%;
  }
}
`

export default ContentCard;
