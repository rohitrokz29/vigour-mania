import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useJournalContext } from '../../hooks/useJournalContext'

export const ParentComment = ({ username, comment, commentedAt, likes, commentId }) => {
    const date = new Date()
    const commentReplies = [
        {
            _id: "ekjbkjbwe",
            username: "Jack daniel",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: date,
            likes: 0
        },

        {
            _id: "ekjbkjbwe232",
            username: "Jack daniel",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: date,
            likes: 0
        },
        {
            _id: "ekjbkjbwe232se",
            username: "Jack daniel",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: date,
            likes: 0
        },
        {
            _id: "ekjbkjbwe232w",
            username: "Jack daniel",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: date,
            likes: 0
        }
    ]
    const { fetchReplies } = useJournalContext();
    const [isOpenReplies, setIsOpenReplies] = useState(false);
    const [repliespage, setRepliespage] = useState(0)
    const [replies, setReplies] = useState(commentReplies)

    const getReplies = async () => {
        const result = fetchReplies({ commentId, repliespage: repliespage + 1 })
        setReplies([...replies,...result]);

    }
    const openReplies = () => {
        getReplies()
        setIsOpenReplies(prevReplies => !prevReplies)
    }


    return (
        <>
            <div className="parent-comment">
                <ChildComment key={commentId} username={username} comment={comment} commentedAt={commentedAt} likes={likes} openReplies={openReplies} />
                {isOpenReplies && <div className="replies" style={{ display: isOpenReplies ? "flex" : "none" }}>
                    {
                        replies[0] && replies.map(reply =>
                            <blockquote key={reply._id}>
                                <ChildComment username={reply.username} comment={reply.comment} commentedAt={reply.commentedAt} likes={reply.likes} isChild={true} />
                            </blockquote>
                        )

                        ||
                        <div style={{ textAlign: 'center' }}>No Replies</div>
                    }

                    <div className="load-more">
                        <span>
                            <i className="fa fa-angle-down" onClick={getReplies}>Load More</i>
                        </span>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

ParentComment.propTypes = {
    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    commentedAt: PropTypes.instanceOf(Date).isRequired,
    likes: PropTypes.number.isRequired,
    replies: PropTypes.instanceOf(Array)
}


export const ChildComment = ({ username, comment, commentedAt, likes, isChild, openReplies }) => {
    const like = () => {

    }

    return (
        <>

            <div className="comment">
                <div className="comment-name">
                    <Link to={`/user/${username}`} className="username">{username}</Link>
                    <div className="journal-date light-text">{commentedAt.toString().slice(4, 16)}</div>
                </div>
                <div className="comment-desc">{comment}</div>
                <div className="comment-details">
                    <i className="fa fa-heart" onClick={like}><span>{likes} likes</span> </i>
                    {!isChild &&
                        <i className="fa fa-heart" onClick={openReplies}><span>Replies</span></i>
                    }
                </div>
            </div>

        </>
    )
}
ChildComment.propTypes = {

    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    commentedAt: PropTypes.instanceOf(Date).isRequired,
    likes: PropTypes.number.isRequired,
    openReplies: PropTypes.func
}