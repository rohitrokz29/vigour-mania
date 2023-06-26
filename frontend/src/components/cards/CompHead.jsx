import PropTypes from 'prop-types'
/**
 * isOpen--tells whether the modal is open or not 
 * setIsOpen -- sets the model view on clicking the + icon 
 * +icon changes the view of modal (open or not)
 */

const CompHead = ({isOpen,setIsOpen,heading}) => {
    return (

        <div className="comp-head">
            <div className="title">{heading}</div>
            <div className="plus-button" onClick={() => setIsOpen(isOpen => !isOpen)}>
                <i className={`fa ${isOpen ? "rotate" : ""}`} area-hidden="true">+</i>
            </div>
        </div>
    )
}

CompHead.propTypes={
    isOpen:PropTypes.bool,
    setIsOpen:PropTypes.func,
    heading:PropTypes.string
}

export default CompHead