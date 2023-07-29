import { createContext, useEffect, useState } from "react";
import API from "../api/api";
import { useUserContext } from "../hooks/useUserContext";
export const JournalContext = createContext();



export const JournalState = ({ children }) => {

    const { setProgress } = useUserContext();
    const [mainJournal, setMainJournal] = useState(null);
    const [allJournals, setAllJournals] = useState([]);
    const [hasMoreJournals, setHasMoreJournals] = useState(true);
    const [journalPage, setJournalPage] = useState(1);
    const [comments, setComments] = useState([]);
    const [commentsPage, setCommentsPage] = useState(1);

    const fetchJournals = async () => {
        console.log('fetchJournals')
        try {
            setProgress(40);
            API.get(`/api/journals/more/${journalPage}`)
                .then(response => {
                    console.log(response)
                    if (response.data.latestJournal) {
                        setMainJournal(response.data.latestJournal);
                    }
                    setProgress(60);
                    setAllJournals([...allJournals, ...response.data.journalsList]);
                    setHasMoreJournals(response.data.hasMore);
                    setJournalPage(page => page + 1);
                    setProgress(100);
                })
        } catch (error) {
            setProgress(100);
            console.log(error)
        }

    }

    const changeMainJournal = async ({ journalId }) => {
        API.get(`/api/journals/1/${journalId}`)
            .then(response => {
                setMainJournal(response.data);
                setComments([])
            })
            .catch(error => {

            })
    }

    const likeJournal = async ({ journalId }) => {
        API.put(`/api/journals/like/${journalId}`)
            .then(response => {

            })
    }
    const fetchComments = async ({ journalId }) => {
        try {
            API.get(`/api/comments/${commentsPage}/${journalId}`)
                .then(response => {
                    console.log(response)
                    setComments([...comments, ...response.data]);
                })
        }
        catch (error) {

        }
    }
    const addComment = async ({ comment }) => {
        try {
            API.put(`/api/comments/add`, { comment })
                .then(response => {
                    comments.unshift(response.data)
                })
        } catch (error) {
            console.log(error);
        }
    }

    const fetchReplies = async ({ commentId, repliesPage }) => {
        return await API.get(`/api/replies/${commentId}/${repliesPage}`)
            .then(response => {
                return response.data
            })
    }



    return (
        <JournalContext.Provider
            value={{
                mainJournal,
                allJournals,
                hasMoreJournals,
                comments,
                fetchJournals,
                changeMainJournal,
                likeJournal,
                fetchComments,
                addComment,
                fetchReplies
            }}
        >
            {children}
        </JournalContext.Provider>
    )
}