import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        backgroundColor: 'var(--header-background)',
        zIndex: 100,
    }
})

function Navigation() {
  const classes = useStyles();  
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  /*useEffect will fire each time the value variable in useState changes, essentially routing to another page...
  history is the second variable*/
  //we're using reactRouter's built in useHistory to navigate to the specified route
useEffect(() => {
switch(value) {
  case 0:
    history.push('/')
    break;
  case 1:
    history.push('/movies') 
    break;
  case 2:
    history.push('/televison')  
    break;
    case 3:
    history.push('/search')
    break;
}
}, [value, history]);

  return (
    <Box>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" style={{color: 'var(--font-dark)'}} icon={<TrendingUpIcon />} />  
        <BottomNavigationAction label="Movies" style={{color: 'var(--font-dark)'}} icon={<TheatersIcon />} />
        <BottomNavigationAction label="TV" style={{color: 'var(--font-dark)'}} icon={<LiveTvIcon />} />
        <BottomNavigationAction label="Search" style={{color: 'var(--font-dark)'}} icon={<TravelExploreIcon />} /> 
        <BottomNavigationAction label="Go Dark" style={{color: 'var(--font-dark)'}} icon={<DarkModeIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Navigation