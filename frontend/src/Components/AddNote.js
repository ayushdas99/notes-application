import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';


const StyleAddNote = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightblue;
  border-radius: 20px;
  padding: 1rem;
  padding-top: 20px;
  min-height: 150px;
  margin: 10px;
`

let styleText = {
	backgroundColor: 'lightblue'
}

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	}

	return (
		<StyleAddNote>
			<textarea style={styleText}
				rows='8'
				cols='10'
				placeholder='Type...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</StyleAddNote>
	);
};

export default AddNote;