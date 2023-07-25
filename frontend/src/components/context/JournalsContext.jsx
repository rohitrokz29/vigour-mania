import { createContext, useEffect, useState } from "react";
import API from "../api/api";
import { useUserContext } from "../hooks/useUserContext";
export const JournalContext = createContext();
const date = new Date();
const journals = [
    { _id: "ekjbkjbwe", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjb", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbweenvk", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbwejwb", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbwewdw", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbwewqw ", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremques iste natus edatees iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbweugk", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "23ekjbkjbwe", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
    { _id: "ekjbkjbwe345", title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },

]
const newComments = [
    {
        username: "jackJill",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: new Date(),
        likes: { count: 3, isLiked: true },
    },
    {
        username: "jackJill",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: new Date(),
        likes: { count: 3, isLiked: false },
    }, {
        username: "jackJill",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: new Date(),
        likes: { count: 3, isLiked: false },
    }, {
        username: "jackJill",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: new Date(),
        likes: { count: 3, isLiked: true },
    }
]
const replies = [
    {
        _id: "ekjbkjbwe",
        username: "Jack daniel",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: date,
        likes: { count: 3, isLiked: true },
    },

    {
        _id: "ekjbkjbwe232",
        username: "Jack daniel",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: date,
        likes: { count: 3, isLiked: true },
    },
    {
        _id: "ekjbkjbwe232se",
        username: "Jack daniel",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: date,
        likes: { count: 3, isLiked: false },
    },
    {
        _id: "ekjbkjbwe232w",
        username: "Jack daniel",
        comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
        commentedAt: date,
        likes: { count: 3, isLiked: false },
    }
]

const desc = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque \taudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volupta\taudantium, totam rem aperia\nm, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam q\nuaerat voluptatem. Ut
enim ad minima veniam, quis nostrum exercitationem ullam sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla \n`

export const JournalState = ({ children }) => {

    const { setProgress } = useUserContext();
    const [mainJournal, setMainJournal] = useState(null);
    const [allJournals, setAllJournals] = useState([]);
    const [hasMoreJournals, setHasMoreJournals] = useState(true);
    const [journalPage, setJournalPage] = useState(1);
    const [comments, setComments] = useState([]);
    const [commentsPage, setCommentsPage] = useState(1);

    const fetchJournals = async () => {
        //TODO try to optimise it -> taking more time 
        console.log('fetchJournals')
        try {
            setProgress(40);
            API.get(`/api/journals/more/${journalPage}`)
                .then(response => {
                    console.log(response)
                    setMainJournal(response.data.latestJournal);
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
        setComments([...comments, ...newComments])
        try {
            API.get(`/api/comments/${commentsPage}`)
                .then(response => {
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

        }
    }

    const fetchReplies = async ({ commentId, repliesPage }) => {
        return replies;
        // return await API.get(`/api/replies/${commentId}/${repliesPage}`)
        //     .then(response => {
        //         return response.data
        //     })
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