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
                    if (response.status === 200) {

                        setNotes([...notes, ...response.data.notes]);
                        setProgress(90);
                        setError("");
                        setHasMoreNotes(hasMoreNotes => response.data.hasMore);
                        setNotebookPage(page => page + 1);

                    }
                    setProgress(100);
                })
                .catch((error) => {
                    setProgress(100);
                    setError(error.message);
                })
        } catch (error) {
            setProgress(100);
            setError(error.message);

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
                    if (response.status === 200 && response.data.modifiedCount === 1) {
                        setProgress(70);
                        setNotes(notes => notes.filter(note => note._id != noteId));
                        setError("");
                    }
                    setProgress(100);
                })
        } catch (error) {
            setProgress(100);
        }
    }
    const addNote = async ({ note, setNote,setIsOpen }) => {

        try {
            setProgress(40);
            API.patch('/api/notes/', note)
                .then(response => {
                    if (response.status === 200) {
                        setProgress(70);
                        setNotes([response.data, ...notes])
                        setProgress(100);
                        setError("");
                        setNote({title:"",description:""});
                        setIsOpen(false);
                    }
                    setProgress(100);
                })
        } catch (error) {
            setProgress(100);
            setError(error.message);
        }
    }
    const fetchAllNotes = async () => {
       setNotebookPage(notebookPage=>-1);
       await fetchNotes();
    }
    return (
        <NotebookContext.Provider
            value={{
                notes,
                error,
                fetchNotes,
                deleteNote,
                fetchAllNotes,
                addNote,
                hasMoreNotes
            }}
        >
            {children}
        </NotebookContext.Provider>
    )
}