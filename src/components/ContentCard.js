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
        <img src={poster ? `${img_300}/${poster}` : unavailable } />
      </div>
      </CardStyles>
  )
}

const CardStyles = styled.div`

`

export default ContentCard;
