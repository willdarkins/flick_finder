import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Navigation from './components/Navigation'


function App() {

  return (
    <AppStyles>
      <Header />
      <div className="container">
        Example text
      </div>
      <Navigation />
    </AppStyles>
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
