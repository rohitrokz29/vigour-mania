import React, { useContext } from 'react'
import { JournalContext } from '../context/JournalsContext'

export const useJournalContext = () => {
    const context = useContext(JournalContext);
    if (!context) return null;
    return context;
}
