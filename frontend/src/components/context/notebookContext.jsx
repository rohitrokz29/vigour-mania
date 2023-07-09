import { createContext, useEffect, useState } from "react";
import API from '../api/api';
import { useUserContext } from "../hooks/useUserContext";
export const NotebookContext = createContext();

export const NotebookState = ({ children }) => {
    const { setProgress } = useUserContext();
    const [notebookPage, setNotebookPage] = useState(1);
    const [error, setError] = useState("");
    const [notes, setNotes] = useState([]);
    const [hasMoreNotes, setHasMoreNotes] = useState(false);

    const fetchNotes = async () => {
        try {
            setProgress(40);
            API.get(`/api/notes/${notebookPage}`)
                .then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        
                        setNotes([...notes, response.data.notes]);
                        setProgress(90);
                        setError("");
                        setHasMoreNotes(hasMoreNotes => response.data.hasMore);
                        setNotebookPage(page => page + 1);
                        console.log(notes)

                    }
                    setProgress(100);
                })
        } catch (error) {
            setProgress(100);
        }

    }
    useEffect(() => {
        fetchNotes()

    }, [])

    const deleteNote = async ({ noteId }) => {
        try {
            setProgress(40);
            API.delete(`/api/notes/${noteId}`)
                .then(response => {
                    if (response.status === 200 && response.data.deleted === 1) {
                        setProgress(40);
                        setNotes(notes => notes.filter(note => note._id != noteId));
                    }
                })
            setProgress(100);
        } catch (error) {
            setProgress(100);
        }
    }
    const addNote = async ({ title, description }) => {

        try {
            setProgress(40);
            API.put('/api/notes/', { title, description })
                .then(response => {
                    if (response.status === 200) {
                        setProgress(70);
                        setNotes([response.data, ...notes])
                    }
                })
            setProgress(100);

        } catch (error) {
            setProgress(100);
        }
    }
    return (
        <NotebookContext.Provider
            value={{
                notes,
                error,
                fetchNotes,
                deleteNote,
                addNote,
                hasMoreNotes
            }}
        >
            {children}
        </NotebookContext.Provider>
    )
}