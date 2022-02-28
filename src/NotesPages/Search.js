import React from "react";
import styled from "styled-components";


const StyleSearch = styled.div`
display: flex;
  align-items: center;
  background-color: yellow;
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 1.5em;
  margin-top: 10px;
`
const StyleInput = styled.div`
background-color: lightblue;
`

const Search = ({ handleSearchNote }) => {
    return(
        <StyleSearch>
            <input color="lightblue"
             onChange={(event) => handleSearchNote(event.target.value)}
            type='text' placeholder="Type to search...."></input>
        </StyleSearch>
    )
}

export default Search;