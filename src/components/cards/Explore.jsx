import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../hooks/useUserContext';

const bg = [
  "linear-gradient(45deg, rgba(164,83,53,1) 1%, rgba(207,82,26,1) 25%, rgba(231,22,35,1) 49%, rgba(194,30,107,1) 74%, rgba(162,31,73,1) 89%)",
  "linear-gradient(45deg, rgba(236,169,64,1) 0%, rgba(246,57,57,1) 64%, rgba(140,40,45,1) 100%)",
  "linear-gradient(45deg, rgba(203,172,65,1) 0%, rgba(247,55,55,1) 56%, rgba(156,45,81,1) 78%)"
]
export const Spots = ({ title, description, path, index, icon }) => {
	const {isSignedIn}=useUserContext();

  return (<>
    <div className="spot" style={{ background: bg[index % 3] }}>
      <div className="spot-info" >
        <div className="spot-title  ">{title}</div>
        <div className="spot-desc ">{description}</div>
      </div>
      <div className="spot-redir">
        <Link to={isSignedIn?path:'/signin'}>
          <i className={`fa fa-${icon}`}></i>
        </Link>
      </div>
    </div>
  </>
  )
}

export const Evolve = ({ title, description, index, icon, path }) => {
  const {isSignedIn}=useUserContext();
  return (
    <>
      <div className='evolve'>
        <div className="evolve-info " style={{ background: bg[index % 3] }}>
          <div className="evolve-title spot-title ">{title}</div>
          <div className="evolve-desc">{description}</div>
        </div>
        <div className="blank">
          <Link to={isSignedIn?path:'/signin'} className='dark-text '>Utilize Here</Link>
        </div>
      </div>

    </>
  )
}
