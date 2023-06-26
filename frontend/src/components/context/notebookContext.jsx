import { createContext, useState } from "react";
import API from '../api/api';
import { useUserContext } from "../hooks/useUserContext";
export const NotebookContext = createContext();

export const NotebookState = ({ children }) => {
    const { setProgress } = useUserContext();
    const [error, setError] = useState("");
    const [notes, setNotes] = useState([]);


    const fetchNotes = () => {
        try {

        } catch (error) {

        }
    }
    const deleteNote = () => {

    }
    const addNote = () => {

    }
    return (
        <NotebookContext.Provider
            value={{
                notes,
                error,
                fetchNotes,
                deleteNote,
                addNote
            }}
        >
            {children}
        </NotebookContext.Provider>
    )
}