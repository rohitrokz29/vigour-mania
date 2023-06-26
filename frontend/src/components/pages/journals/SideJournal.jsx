import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import Image from '../../../assets/1.jpg'

const SideJournal = ({ title, postedAt, description }) => {
  return (
    <>
      <div className="small-journal">
        <img src={Image} alt="" />
        <Link className="journal-data">
          <div className='small-journal-title dark-text bold '>{title}</div>
          <div className='journal-date light-text'>{postedAt.toString().slice(4, 16)}</div>
          <div className='journal-desc'>{description.length > 100 ? `${description.slice(0, 90)}...` : description}</div>
        </Link>
      </div>
    </>
  )
}
SideJournal.propTypes = {
  title: PropTypes.string,
  postedAt: PropTypes.instanceOf(Date),
  description: PropTypes.string
}
export default SideJournal