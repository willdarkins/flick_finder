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
      <div>
        {/* if poster exists, then populate the template with the api data...
        if not, display the imported unavailable poster */}
        <img src={poster ? `${img_300}/${poster}` : unavailable } alt={title}/>
        <span className='title'>{title}</span>
        {/* conditionally rendering the media_type to render a tv show or movie bassed on the property's value */}
        <span className='sub-title'> 
          {media_type === 'tv'? 'Television Series': 'Movie'}
          <span className='sub-title'>{date}</span>
          </span>
      </div>
      </CardStyles>
  )
}

const CardStyles = styled.div`

`

export default ContentCard;
