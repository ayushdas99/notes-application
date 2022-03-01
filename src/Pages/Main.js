import { nanoid } from "nanoid";
import React from "react";
import { useState, useEffect } from "react";
import NotesList from "../Components/NotesList";
import Search from "../Components/Search";
import styled from "styled-components";

const StyleDark = styled.div`
  background-color: black;
`;

const Main = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first note!",
      date: "14/02/2022",
    },
    {
      id: nanoid(),
      text: "The most important day of my life!",
      date: "14/02/2022",
    },
    {
      id: nanoid(),
      text: "When people thought coding was tough!",
      date: "14/02/2022",
    },
    {
      id: nanoid(),
      text: "Memories for a lifetime!",
      date: "14/02/2022",
    },
    {
      id: nanoid(),
      text: "Last but certainly not the least!",
      date: "14/02/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default Main;
