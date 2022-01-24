import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from './components/Navigation'
import { Container } from "@mui/material";
import { Search } from "@mui/icons-material";


function App() {

  return (
    <Router>
    <AppStyles>
      <Header />
      <div className="container">
        <Container>
          <Switch>
            <Route exact path='/' component={Trending}/>
            <Route exact path='/Search' component={Search}/>
            <Route exact path='/Movies' component={Movies}/>
            <Route exact path='/Televison' component={Television}/>
          </Switch>
        </Container>
      </div>
      <Navigation />
    </AppStyles>
    </Router>
  );
}

const AppStyles = styled.div`
.container{
  min-height: 100vh;
  padding-top: 130px;
  padding-bottom: 70px;
  background-color: var(--body-background);
    @media (max-width: 700px) {
      padding-top: 70px;
    }
}

`

export default App;
