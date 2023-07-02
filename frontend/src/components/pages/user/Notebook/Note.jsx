import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useNotebookContext } from '../../../hooks/useNotebookContext';
const Note = ({ title, description, notedAt,noteId }) => {
    const [display, setDisplay] = useState("none")
    const date = new Date();
    const { deleteNote } = useNotebookContext();
    const handleOpen = () => {
        setDisplay(display => display === 'none' ? "block" : "none");
    }
    return (
        <>
            <div className='note-item'>
                <div className='note-title'>
                    <div className="title">{title} &nbsp;&nbsp;<span style={{ fontSize: "80%", fontStyle: "itallic" }}>{notedAt || `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</span></div>
                    <div className="icons">

                        <i className="fa-solid fa-trash-can" onClick={()=>deleteNote({noteId})}></i>
                        <i className="fa-solid fa-angle-down" onClick={handleOpen}></i>
                    </div>
                </div>
                <p className="note-desc" style={{ display: display }}>
                    {description}
                </p>
            </div>
        </>
    )
}


Note.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    notedAt: PropTypes.instanceOf(Date)
}
export default Note