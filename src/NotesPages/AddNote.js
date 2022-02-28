import React from "react";
import { useState } from "react";
import styled from "styled-components";


const StyleAddNote = styled.div`
background-color: lightblue;
padding-left: 10px;
`

const AddNote = ({ handleAddNote }) => {
    const[noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        handleAddNote(noteText);

    }
    return(
        <StyleAddNote>
        <textarea
        rows='8'
        columns='10'
        placeholder='Type to add note!'
        value={noteText}
        onChange={handleChange}
        ></textarea>
        <button className="save" onClick={handleSaveClick}>Save</button>
        </StyleAddNote>
    )
};

export default AddNote;
