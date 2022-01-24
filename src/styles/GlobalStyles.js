// file to set gloabal styles throughout the entire app using styled-components dependency
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}
:root {
        --header-background: #ffffff;
        --body-background: #e9eaef;
        --font-dark: #1b1b1b;
    }

`

export default GlobalStyle