import React, { useState } from 'react';
import { useNotebookContext } from '../../../hooks/useNotebookContext';
import './notebook.css';
import Note from './Note';
import CompHead from '../../../cards/CompHead';

const Notebook = () => {
  const { notes, addNote } = useNotebookContext();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  const handleSubmit =async  (e) => {
    e.preventDefault();
    await addNote(note)

  }
  return (
    <>
      <CompHead heading="Your Notes" isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="note-container">
        <div className="notes">
          {
            notes.map(item => <Note key={item._id} noteId={item._id} notedAt={item.notedAt} title={item.title} description={item.description} />)
          }
        </div>
        <form onSubmit={handleSubmit} className={`note-item ${isOpen ? "add-form" : "add-note"}`} >
          <div className="add-note-head dark-text large-text">New Note</div>
          <ul>
            <li className="note-input">
              <label htmlFor='title'>Title:</label>
              <br />
              <input type="text" className='input' name='title' id='title' placeholder='Title' value={note.title} onChange={handleChange}/>
            </li>
            <li className="note-input ">
              <label htmlFor="description">Description:</label>
              <br />
              <textarea name="description" className='input' id="description" placeholder='Description' value={note.description} onChange={handleChange} ></textarea>
            </li>
          </ul>
          <div className="note-buttons">

            <button type='submit' className="add-button  add-note-button" >Add Note</button>
            <button type='reset' className="add-button  add-note-button" onClick={()=>setNote({title:"",description:""})}>Reset</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Notebook