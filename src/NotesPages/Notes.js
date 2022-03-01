import React from "react"
import styled from "styled-components";


const StyleNote = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: plum;
  border-radius: 20px;
  padding: 1rem;
  padding-top: 20px;
  min-height: 150px;
  margin: 10px;
`



const Note = ({id, text, date, handleDeleteNote}) => {
    return(
        <StyleNote>
            <span>{text}</span>
            <div>
                <small>{date}</small>
                <button onClick={() => handleDeleteNote(id)}>Delete</button>     
            </div>
        </StyleNote>
    )
};

export default Note;