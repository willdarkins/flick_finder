import React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

function PageScroll({setPage, numOfPages = 10}) {
  const pageChange = (page) => {
    setPage(page)
    window.scroll(0,0)
  }
  return(
    <PageScrollStyles>
    <Pagination
    count={numOfPages}
    onChange={(e) => pageChange(e.target.textContent)} size='large'
    hideNextButton
    hidePrevButton/>
    </PageScrollStyles>
  )
}

const PageScrollStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`

export default PageScroll;
