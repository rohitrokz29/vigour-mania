import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useJournalContext } from '../../hooks/useJournalContext'

export const ParentComment = ({ username, comment, commentedAt, likes, commentId }) => {
    const date = new Date()
 
    const { fetchReplies } = useJournalContext();
    const [isOpenReplies, setIsOpenReplies] = useState(false);
    const [repliespage, setRepliespage] = useState(1);
    const [replies, setReplies] = useState([]);

    const getReplies = async () => {
        const result =await fetchReplies({ commentId, repliespage })
        setRepliespage(page=>page+1);
        setReplies([...replies,...result]);

    }
    const openReplies =async  () => {
        if(repliespage===1) {
            await getReplies();
        }
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
                    <i className="fa fa-heart" onClick={like} style={{color:likes.isLiked?"#ff2424":"#000"}}><span  >{likes.count} </span> Like</i>
                    {!isChild &&
                        <i className="fa fa-comment" onClick={openReplies}><span>Replies</span></i>
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