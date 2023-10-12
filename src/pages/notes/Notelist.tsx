import React from 'react';
import Note from './Notes';
import AddNote from './Addnote';

interface NotesListProps {
  notes: {
    id: string;
    text: string;
    date: string;
  }[];
  handleAddNote: (noteText: string) => void;
  handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  handleAddNote,
  handleDeleteNote,
}) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
