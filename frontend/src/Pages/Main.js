import { nanoid } from "nanoid";
import React from "react";
import { useState, useEffect, useContext } from "react";
import NotesList from "../Components/NotesList";
import Search from "../Components/Search";
import styled from "styled-components";
import LayoutContext from "../context/Layout";
import Header from "../Layout/Header";
import Toggle from "../Components/Toggle";


const Main = () => {
  const Layout = useContext(LayoutContext)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "My first note!",
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

  const [ darkMode, setDarkMode] = useState(false)

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    Layout.setCounter(newNotes.length);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    Layout.setCounter(newNotes.length)
  };

  

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Toggle handleToggleDarkMode={setDarkMode} />
     
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        
      />
    </div>
    </div>
  );
};

export default Main;
