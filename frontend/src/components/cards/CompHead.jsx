import React from 'react'

const CompHead = ({isOpen,setIsOpen,heading}) => {
    return (

        <div className="comp-head">
            <div className="title">{heading}</div>
            <div className="plus-button" onClick={() => setIsOpen(isOpen => !isOpen)}>
                <i className={`fa fa-plus ${isOpen ? "rotate" : ""}`} area-hidden="true"></i>
            </div>
        </div>
    )
}

export default CompHead