import React from "react";
import styled from "styled-components";
import Header from "./components/Header";


function App() {
  
  return (
    <AppStyles>
    <Header />
    </AppStyles>
  );
}

const AppStyles = styled.div`
  min-height: 100vh;
  padding-top: 130px;
  padding-bottom: 70px;
  background-color: var(--body-background);

  @media (max-width: 700px) {
    padding-top: 70px;
  }
`

export default App;
