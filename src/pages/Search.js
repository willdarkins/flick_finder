import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContentCard from '../components/ContentCard';
import PageScroll from '../components/PageScroll';
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
  const [searchText, setSearchText] = useState('');
  const [content, setcontent] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

    setcontent(data.results)
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return <SearchStyles>
    <div style={{ display: 'flex', margin: '15px 0 ' }}>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
        onClick={fetchSearch}
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
        setPage(1)
      }}
      style={{ paddingBottom: '5px' }}>
      <Tab style={{ width: '50%' }} label='Search Movies' />
      <Tab style={{ width: '50%' }} label='Search Television' />
      <Tab />
    </Tabs>
    <div className='search'>
      {/* validating that if there's content to display, each object should be mapped acorss the cards */}
      {/* also sending all the data from content variable to the ContentCard component */}
      {content && content.map((i) => <ContentCard
        key={i.id}
        id={i.id}
        poster={i.poster_path}
        title={i.title || i.name}
        date={i.first_air_date || i.release_date}
        media_type={type ? 'tv' : 'movie'}
        vote_average={i.vote_average} />)}
        {searchText && !content && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2> )}
    </div>
    <PageScroll setPage={setPage} />
  </SearchStyles>

}

const SearchStyles = styled.div`
  .searchParts{
    display: 'flex';
    margin: 15px 0;
    }
  .search{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  }
`

export default Search;
