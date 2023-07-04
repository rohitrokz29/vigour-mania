import React, { useContext } from 'react'
import { JournalContext } from '../context/JournalsContext'

export const useJournalContext = () => {
    const context = useContext(JournalContext);
    if (!context) throw Error("Context Not Found");
    return context;
}
