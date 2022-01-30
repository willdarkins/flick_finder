import React, { useState } from 'react';
import {
  Button,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function Search() {

  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setsearchText] = useState('');
  const [content, setcontent] = useState();

const fetchSearch = async () => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`) 
  
  setcontent(data.results)
}


  return <SearchStyles>
    <div style={{display: 'flex', margin: '15px 0 '}}>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
      onChange={(e) => setSearchText(e.target.value)}
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
    }}
    style={{paddingBottom: '5px'}}>
    <Tab style={{ width:'50%' }} label='Search Movies'/>
    <Tab style={{ width:'50%' }} label='Search Television'/>
    <Tab />
    </Tabs>
  </SearchStyles>;
}

const SearchStyles = styled.div`
  .searchParts{
    display: 'flex';
    margin: 15px 0;
    }
`

export default Search;
