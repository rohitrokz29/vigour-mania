import React from 'react'
import { Link } from 'react-router-dom'
//components
import Heads from '../../cards/Heads'
//MainJournal-- representing current latest Journal
import MainJournal from './MainJournal'
//Side Journal representing previous journals 
import SideJournal from './SideJournal'
//styles
import './journal.css'
import { useJournalContext } from '../../hooks/useJournalContext'



const Journals = () => {
    const { allJournals,  mainJournal } = useJournalContext();

    return (
        <>
            <div className="journal-container">
                <div className="main-journal">
                    <Heads heading="Weekly Journal" />
                    {mainJournal && <MainJournal />
                    }
                </div>
                <div className="side-journals">
                    <h2>Previous Journals</h2>
                    {
                        allJournals.map((item, index) => <SideJournal key={index} journalId={item._id} title={item.title} description={item.description} postedAt={item.postedAt} />)
                    }
                    <div className="load-more ">
                        <span>
                            <i className="fa fa-angle-down">Load More</i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journals 