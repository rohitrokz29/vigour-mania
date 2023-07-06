import React from 'react'
import PropTypes from 'prop-types';

import Image from '../../../assets/1.jpg'
import { useJournalContext } from '../../hooks/useJournalContext';
import { useThemeContext } from '../../hooks/useThemeContext';

const SideJournal = ({ title, postedAt, description, journalId }) => {
  const { changeMainJournal } = useJournalContext();
  const { theme } = useThemeContext();
  return (
    <>
      <div className={`small-journal bg-${theme}`}>
        <img src={Image} alt="" />
        <div className="journal-data" onClick={() => changeMainJournal({ journalId })}>
          <div className={`small-journal-title  bold dark-text-${theme}`}>{title}</div>
          <div className={`journal-date light-text-${theme}`}>{postedAt.toString().slice(4, 16)}</div>
          <div className={`journal-desc dark-text-${theme}`}>{description.length > 100 ? `${description.slice(0, 90)}...` : description}</div>
        </div>
      </div>
    </>
  )
}
SideJournal.propTypes = {
  title: PropTypes.string,
  postedAt: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  journalId: PropTypes.string
}
export default SideJournal