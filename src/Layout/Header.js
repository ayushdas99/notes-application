import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Note from "../NotesPages/Notes";





const StyleHeader = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #A5B1DF;
padding: 10px;
`

const Header = ({ handleToggleDarkMode}) => {
    return(
        <StyleHeader>
            <nav>
            <h1>Notes Application</h1>
            <h3>Counter:{}</h3>
            <button>
                <Link to="/home">Home page</Link>
            </button>
            <button>
                <Link to="/about">About us</Link>
            </button>
        
            <button onClick={ () => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>Toggle</button>
            </nav>        
        </StyleHeader>
    )
}
export default Header;