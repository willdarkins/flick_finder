import React from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

function PageScroll({setPage, numofPages = 10}) {
  const pageChange = (page) => {
    setPage(page)
    window.scroll(0,0)
  }
  return(
    <PageScrollStyles>
    <Pagination count={numofPages} onChange={(e) => pageChange(e.target.textContent)}/>
    </PageScrollStyles>
  )
}

const PageScrollStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10;
`

export default PageScroll;
