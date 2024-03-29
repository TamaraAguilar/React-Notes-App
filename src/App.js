import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "07/05/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "15/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "20/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "15/10/2023",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
