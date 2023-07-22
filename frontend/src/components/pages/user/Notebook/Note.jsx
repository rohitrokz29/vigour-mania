import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useNotebookContext } from '../../../hooks/useNotebookContext';
import { useThemeContext } from '../../../hooks/useThemeContext';
const Note = ({ title, description, notedAt, noteId }) => {
    const { theme } = useThemeContext();
    const [display, setDisplay] = useState("none")
// console.log({notedAt})
    // const date = new Date();
    const { deleteNote } = useNotebookContext();
    const handleOpen = () => {
        setDisplay(display => display === 'none' ? "block" : "none");
    }
    return (
        <>
            <div className={`note-item bg-${theme}`}>
                <div className='note-title'>
                    <div className={`title dark-text-${theme}`}>
                        {title} &nbsp;&nbsp;
                        <span style={{ fontSize: "80%", fontStyle: "itallic" }}>
                            {notedAt || `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                        </span>
                    </div>
                    <div className="icons">

                        <i className="fa-solid fa-trash-can" onClick={() => deleteNote({ noteId })}></i>
                        <i className="fa-solid fa-angle-down" onClick={handleOpen}></i>
                    </div>
                </div>
                <p className={`note-desc dark-text-${theme}`} style={{ display: display, borderTop: `1px solid ${theme === 'dark' ? "#fff" : "#000"}` }}>
                    {description}
                </p>
            </div>
        </>
    )
}


Note.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    notedAt: PropTypes.string
}
export default Note