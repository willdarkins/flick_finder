// file to set gloabal styles throughout the entire app using styled-components dependency
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Goudy Bookletter 1911', serif;
}
`

export default GlobalStyle