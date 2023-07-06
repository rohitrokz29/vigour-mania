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
import { useJournalContext } from '../../hooks/useJournalContext';
import {useThemeContext} from '../../hooks/useThemeContext';


const Journals = () => {
    const { allJournals, mainJournal, fetchJournals } = useJournalContext();
    const {theme}=useThemeContext();
    const getJournals = async () => {
        await fetchJournals();
    }

    return (
        <>
            <div className={`journal-container bg-${theme}er`}>
                <div className="main-journal">
                    <Heads heading="Weekly Journal" /> 
                    {mainJournal && <MainJournal />
                    }
                </div>
                <div className="side-journals ">
                    <h2 className={`dark-text-${theme}`}>Previous Journals</h2>
                    {
                        allJournals.map((item, index) => <SideJournal key={item._id} journalId={item._id} title={item.title} description={item.description} postedAt={item.postedAt} />)
                    }
                    <div className="load-more " onClick={getJournals}>
                        <span>
                            <i className="fa fa-angle-down " ><span className={`dark-text-${theme}`}>Load More</span></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journals 