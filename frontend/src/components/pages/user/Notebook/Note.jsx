import React, { useState } from 'react'

const Note = ({ title, description,notedAt }) => {
    const [display, setDisplay] = useState("none")
    const date=new Date();

    const  handleOpen=()=>{
        setDisplay(display=>display==='none'?"block":"none");
    }
    const handleDelete=()=>{
        console.log("delete")
    }
    return (
        <>
            <div className='note-item'>
                <div className='note-title'>
                    <div className="title">{title} &nbsp;&nbsp;<span style={{fontSize:"80%",fontStyle:"itallic"}}>{notedAt|| `${date.getDate()}/${date.getMonth() }/${date.getFullYear()}`}</span></div>
                    <div className="icons">

                    <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
                    <i className="fa-solid fa-angle-down"  onClick={handleOpen}></i>
                    </div>
                </div>
                <p className="note-desc" style={{display:display}}>
                    {description}
                </p>
            </div>
        </>
    )
}

export default Note