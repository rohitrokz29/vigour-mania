import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ParentComment = ({ username, comment, commentedAt, likes, replies }) => {
    const [isOpenReplies, setIsOpenReplies] = useState(false)
    const openReplies = () => {
        setIsOpenReplies(prevReplies => !prevReplies)
    }
    return (
        <>
            <div className="parent-comment">
                <ChildComment username={username} comment={comment} commentedAt={commentedAt} likes={likes} openReplies={openReplies} />
                <div className="replies" style={{ display: isOpenReplies ? "flex" : "none" }}>
                    {
                        replies?.map(reply => <blockquote>
                            <ChildComment username={reply.username} comment={reply.comment} commentedAt={reply.commentedAt} likes={reply.likes} isChild={true} />
                        </blockquote>
                        )

                        ||
                        <div style={{textAlign:'center'}}>No Replies</div>
                    }

                </div>
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
    const like=()=>{

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