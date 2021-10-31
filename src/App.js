
import { useState } from 'react';

import './App.css';
import './components/Note/Note.css';
import './components/NoteList/NoteList.css';

import NotesList from './components/NoteList/NotesList';

function App() {
  return (
    <div className="container">
      <NotesList></NotesList>
    </div>
  );
}



export default App;
