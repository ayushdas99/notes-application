import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyleHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #A5B1DF;
padding: 20px;
`

const Header = ({ handleToggleDarkMode}) => {
    return(
        <StyleHeader>
            <nav>
            <h1>Notes Application</h1>
            <button>
                <Link to="/home">Home page</Link>
            </button>
            <button>
                <Link to="/about">About us</Link>
            </button>
        
            <button onClick={() => handleToggleDarkMode(
                (previousDarkMode => !previousDarkMode))}>
                    Toggle</button>
            </nav>        
        </StyleHeader>
    )
}
export default Header;