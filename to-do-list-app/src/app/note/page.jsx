'use client'

import React, { useState } from 'react';

function NoteOverlay({ addNote, closeOverlay }) {
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (note.trim()) {
      const currentDate = new Date().toLocaleString();
      addNote({ text: note, date: currentDate });
      setNote('');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl mb-4">Add a New Note</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="4"
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 text-white rounded-xl mr-2"
          >
            Save
          </button>
          <button
            onClick={closeOverlay}
            className="p-2 bg-red-500 text-white rounded-xl"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Note() {
  const [notes, setNotes] = useState([]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
    setIsOverlayOpen(false);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="border-l-4 border-sky-200 pl-3">
      <div className="flex border-b-2 border-slate-200 mt-2">
        <h1 className="flex-auto text-2xl">Notes</h1>
        <button
          onClick={() => setIsOverlayOpen(true)}
          className="p-2 bg-sky-300 rounded-xl mb-4 hover:bg-sky-100"
        >
          Add Note
        </button>
      </div>
      
      <div className="w-full">
        {notes.map((note, index) => (
          <div key={index} className="p-4 bg-white mb-2 rounded shadow flex justify-between items-start">
            <div>
              <div className="text-gray-600 text-sm mb-1">{note.date}</div>
              <div>{note.text}</div>
            </div>
            <button
              onClick={() => deleteNote(index)}
              className="p-2 bg-red-500 text-white rounded-xl ml-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {isOverlayOpen && (
        <NoteOverlay addNote={addNote} closeOverlay={() => setIsOverlayOpen(false)} />
      )}
    </div>
  );
}
