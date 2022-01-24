import React from 'react';
import styled from "styled-components";

function Header() {
    return <HeaderStyles>
        <span>Flick Finder</span>
    </HeaderStyles>;
}

const HeaderStyles = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    background-color: var(--header-background);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    color: var(--font-dark);
    font-size: 5vw;
    font-weight: bold;
    z-index: 100;
    cursor: pointer;
    
@media (max-width:1000px) {
    padding-top: 15px;
    font-size: 6.4vw
}
`

export default Header;
