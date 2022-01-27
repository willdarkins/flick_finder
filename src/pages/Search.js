import React, { useState } from 'react';
import {
  Button,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

function Search() {

  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);

  return <>
    <div style={{display: 'flex', margin: '15px 0 '}}>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
      // onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        // onClick={fetchSearch}
        variant="contained"
        style={{ marginLeft: 10 }}>
        <SearchIcon />
      </Button>
    </div>
    <Tabs 
    value={type} 
    indicatorColor='primary'
    textColor='primary'
    onChange={(event, newValue) => {
      setType(newValue);
      setPage(1 )
    }}>
    <Tab style={{ width:'50%' }} label='Search Movies'/>
    <Tab style={{ width:'50%' }} label='Search Television'/>
    <Tab />
    </Tabs>
  </>;
}

const SearchStyles = styled.div`
  .searchParts{
    display: 'felx';
    margin: 15px 0;
    }
`

export default Search;
