import React, { useState } from 'react'

const Note = ({ title, description }) => {
    const [display, setDisplay] = useState("none")
    const  handleClick=()=>{
        setDisplay(display=>display==='none'?"block":"none");
    }
    return (
        <>
            <div className='note-item'>
                <div className='note-title' onClick={handleClick}>
                    <div className="title">{title}</div>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                <p className="note-desc" style={{display:display}}>
                    {description}
                </p>
            </div>
        </>
    )
}

export default Note