import PropTypes from 'prop-types'
import { useThemeContext } from '../hooks/useThemeContext'
/**
 * isOpen--tells whether the modal is open or not 
 * setIsOpen -- sets the model view on clicking the + icon 
 * +icon changes the view of modal (open or not)
 */

const CompHead = ({ isOpen, setIsOpen, heading }) => {
    const { theme } = useThemeContext();
    return (
        <div className={`comp-head-outer bg-${theme}er`}>
            <div className={`comp-head bg-${theme}`}>
                <div className={`title  dark-text-${theme}`}>{heading}</div>
                <div className="plus-button" onClick={() => setIsOpen(isOpen => !isOpen)}>
                    <i className={`fa ${isOpen ? "rotate" : ""}`} area-hidden="true">+</i>
                </div>
            </div>
        </div>
    )
}

CompHead.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    heading: PropTypes.string
}

export default CompHead