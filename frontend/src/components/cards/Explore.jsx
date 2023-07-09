import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
//custom hooks
import { useUserContext } from '../hooks/useUserContext';
import { useThemeContext } from '../hooks/useThemeContext';

//component for spotlight section 
export const Spots = ({ title, description, path, index, icon }) => {
  //user state -isSignedIn
  const { isSignedIn } = useUserContext();
  const {theme}=useThemeContext()
  return (<>
    <div className={`spot bg-${index % 3}`} >
      <div className="spot-info" >
        <div className="spot-title  ">{title}</div>
        <div className="spot-desc ">{description}</div>
      </div>
      <div className="spot-redir ">
        <Link  to={isSignedIn ? path : '/signin'}>
          <i className={`fa fa-${icon} }`}></i>
        </Link>
      </div>
    </div>
  </>
  )
}

Spots.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
  icon: PropTypes.string
}

//component for evolve section
export const Evolve = ({ title, description, index, icon, path }) => {
  const { isSignedIn } = useUserContext();
  const {theme}=useThemeContext();
  return (
    <>
      <div className='evolve'>
        <div className={`evolve-info bg-${(index%3)}`}  >
          <div className="evolve-title spot-title ">{title}</div>
          <div className="evolve-desc">{description}</div>
        </div>
        <div className="blank">
          <Link to={isSignedIn ? path : '/signin'} className={`dark-text-${theme}`}>Utilize Here</Link>
        </div>
      </div>

    </>
  )
}
Evolve.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.number,
  icon: PropTypes.string
}