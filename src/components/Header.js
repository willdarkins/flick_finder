import React from 'react';
import styledComponents from "styled-components";

function Header() {
    return <HeaderStyles>
        <span className="header">Flick Finder</span>
    </HeaderStyles>;
}

const HeaderStyles = styled.div`
 .header{
    width: 100%;
    cursor: pointer;
    position: fixed;
    display: flex;
    justify-content: center;
    background-color: var(--header-background);
    font-size: 5vw;
    padding-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    color: var(--font-dark);
    z-index: 100;
 }
`
export default Header;
