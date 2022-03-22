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

let styleInput = {
    backgroundColor:'yellow'
}


const Search = ({ handleSearchNote }) => {
    return(
        <StyleSearch>
            <input style={styleInput}
             onChange={(event) => handleSearchNote(event.target.value)}
            type='text' placeholder="Type to search...."></input>
        </StyleSearch>
    )
}

export default Search;