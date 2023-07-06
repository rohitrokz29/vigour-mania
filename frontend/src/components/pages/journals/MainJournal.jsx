import React, { useState } from 'react'
import PropTypes from 'prop-types'
//assets
import Image from '../../../assets/1.jpg'
import { ParentComment } from './Comments'
import { useJournalContext } from '../../hooks/useJournalContext'
import { useThemeContext } from '../../hooks/useThemeContext'
const MainJournal = () => {
    const { mainJournal, fetchComments, comments, likeJournal, addComment } = useJournalContext();
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
    const [comment, setComment] = useState("");
    const { theme } = useThemeContext();
    const openComments = async () => {
        if (comments.length === 0) {
            await fetchComments({ journalId: mainJournal._id });
        }
        setIsCommentBoxOpen(isCommentBoxOpen => !isCommentBoxOpen);
    }
    const handleAddComment = async () => {
        await addComment({ comment })
    }
    return (
        <>
            <div className="journal-title ">
                <h2 className={`dark-text-${theme}`}>{mainJournal.title}</h2>
                <span className={`posted light-text-${theme} `}>{mainJournal.postedAt.toString().slice(4, 16)}</span>
            </div>
            <div className="journal-image">
                <img src={Image} alt="" />
            </div>
            <div className={`journal-desc-main dark-text-${theme}`}>
                {
                    `${mainJournal.description.slice(0, 900)}`
                }
                <br />
                {
                    `    ${mainJournal.description.slice(100)}`
                }
            </div>
            <div className="journal-actions">
                <div>
                    <div className="dark-text-light comments" >
                        <span>Comments</span>
                        <i className={`fa fa-angle-${isCommentBoxOpen ? "up" : "down"} bold`} onClick={openComments} ></i>
                    </div>
                    <div className="actions">
                        {/* TODO Replace angle down to like 1=>thumb 2=> share 3=>download  */}

                        <i className="fa fa-heart   " style={{ color: mainJournal.likes.isLiked ? "#ff0000" : "#000" }} onClick={() => likeJournal({ journalId: mainJournal._id })}>
                            <span style={{ fontSize: "100%" }}>{mainJournal.likes.count}</span>

                        </i>
                        <i className="fa fa-download  "></i>
                        <i className="fa fa-share  "></i>

                    </div>
                </div>
            </div>
            {
                isCommentBoxOpen &&
                <div className="comments-box "  >
                    <div className="add-comment">
                        <input name="comment" id="add-comment" placeholder='Comment Here' value={comment} onChange={(e) => setComment(e.target.value)}></input>
                        <button id='add-comment-button' onClick={handleAddComment} >
                            Add
                            {/* <i className="fa fa-angle-right"></i> */}
                        </button>
                    </div>
                    {
                        comments.map((comment, index) => <ParentComment key={index} commentId={comment._id} username={comment.username} comment={comment.comment} commentedAt={comment.commentedAt} likes={comment.likes} />)
                    }
                    <div className="load-more">
                        <span>
                            <i className="fa fa-angle-down " ><span className={`dark-text-${theme}`}>Load More</span></i>
                        </span>
                    </div>
                </div>
            }
        </>
    )
}
MainJournal.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date)
}
export default MainJournal