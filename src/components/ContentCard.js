import React from 'react';
import styled from 'styled-components';

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
      <div>{title}</div>
      </CardStyles>
  )
}

const CardStyles = styled.div`

`

export default ContentCard;
