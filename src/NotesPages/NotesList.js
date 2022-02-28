import React from "react";
import Note from "./Notes";
import AddNote from "./AddNote";
import styled from "styled-components";


const StyleNotesList = styled.div`
display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const  NotesList = ({ notes, handleAddNote, handleDeleteNode }) => {
    return(
        <StyleNotesList>
            {notes.map((note) => (
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date} 
                handleDeleteNode={handleDeleteNode}
                />
            ))}
            <AddNote handleAddNote = {handleAddNote} />
           
        </StyleNotesList>
    )
};

export default NotesList;