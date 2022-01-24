import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


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
        <BottomNavigationAction label="Search" style={{color: 'var(--font-dark)'}} icon={<TravelExploreIcon />} /> 
        <BottomNavigationAction label="Movies" style={{color: 'var(--font-dark)'}} icon={<TheatersIcon />} />
        <BottomNavigationAction label="TV" style={{color: 'var(--font-dark)'}} icon={<LiveTvIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default Navigation