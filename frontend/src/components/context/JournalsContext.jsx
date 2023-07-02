import { createContext, useEffect, useState } from "react";
import API from "../api/api";
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

    const [mainJournal, setMainJournal] = useState(null);
    const [allJournals, setAllJournals] = useState([]);
    const [journalPage, setJournalPage] = useState(0)
    const [comments, setComments] = useState([]);


    const fetchJournals = async () => {
        // try {
        //     API.get(`/api/journals/all/${journalPage + 1}`)
        //         .then(response => {
        //             setMainJournal(response.data.mainJournal);
        //             setAllJournals([...allJournals, ...response.data.allJournals]);
        //             setJournalPage(page => page + 1);

        //         })
        // } catch (error) {

            setMainJournal({ _id: "92099", title: "This is title", description: desc, postedAt: date, likes: { count: 5, isLiked: true } })
            setAllJournals(journals)
        // }
    }
    useEffect(() => {
        fetchJournals()
    }, [])

    const changeMainJournal = async ({ journalId }) => {
        API.get(`/api/journals/1/${journalId}`)
            .then(response => {
                setMainJournal(response.data);
                setComments([])
            })
            .catch(error=>{
                
            })
    }

    const likeJournal=async ({journalId})=>{
        console.log(journalId)

        API.put(`/api/journals/like/${journalId}`)
        .then(response=>{

        })
    }
    const fetchComments = async ({ journalId }) => {

        setComments(newComments)
    }

    const fetchReplies = ({ commentId, repliesPage }) => {

        return replies;
    }

    

    return (
        <JournalContext.Provider
            value={{
                mainJournal,
                allJournals,
                comments,
                fetchJournals,
                changeMainJournal,
                likeJournal,
                fetchComments,
                fetchReplies
            }}
        >
            {children}
        </JournalContext.Provider>
    )
}