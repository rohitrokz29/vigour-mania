import React, { useState } from 'react';
import { useNotebookContext } from '../../../hooks/useNotebookContext';
import './notebook.css';
import Note from './Note';
import CompHead from '../../../cards/CompHead';
import { useThemeContext } from '../../../hooks/useThemeContext';

const Notebook = () => {
  const { theme } = useThemeContext();
  const { notes, addNote, fetchNotes , hasMoreNotes } = useNotebookContext();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNote(note)

  }
  return (
    <>
      <CompHead heading="Your Notes" isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`note-container bg-${theme}er`}>
        <div className="notes">
          {
            //TODO All notes are not mapped properly
           notes.length>0&& notes.map(item => <Note key={item._id} noteId={item._id} notedAt={item.notedAt} title={item.title} description={item.description} />)
          }
          {
            hasMoreNotes
            &&
            <div className="load-more " onClick={fetchNotes}>
              <span>
                <i className="fa fa-angle-down " ><span className={`dark-text-${theme}`}>Load More</span></i>
              </span>
            </div>

          }

        </div>
        <form onSubmit={handleSubmit} className={`note-item ${isOpen ? "add-form" : "add-note"} bg-${theme} `} >
          <div className={`add-note-head dark-text-${theme} large-text `}>New Note</div>
          <ul>
            <li className="note-input">
              <label htmlFor='title' className={`dark-text-${theme}`}>Title:</label>
              <br />
              <input type="text" className='input' name='title' id='title' placeholder='Title' value={note.title} onChange={handleChange} />
            </li>
            <li className="note-input ">
              <label htmlFor="description" className={`dark-text-${theme}`}>Description:</label>
              <br />
              <textarea name="description" className='input' id="description" placeholder='Description' value={note.description} onChange={handleChange} ></textarea>
            </li>
          </ul>
          <div className="note-buttons">

            <button type='submit' className="add-button  add-note-button" >Add Note</button>
            <button type='reset' className="add-button  add-note-button" onClick={() => setNote({ title: "", description: "" })}>Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Notebook