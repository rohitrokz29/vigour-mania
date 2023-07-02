import React, { useState } from 'react'
import PropTypes from 'prop-types'
//assets
import Image from '../../../assets/1.jpg'
import { ParentComment } from './Comments'
import { useJournalContext } from '../../hooks/useJournalContext'
const MainJournal = () => {
    const { mainJournal, fetchComments, comments, likeJournal } = useJournalContext();
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)

    const openComments = async () => {
        !isCommentBoxOpen && fetchComments({ journalId: mainJournal._id });
        setIsCommentBoxOpen(prevState => !prevState);
    }
    return (
        <>
            <div className="journal-title">
                <h2>{mainJournal.title}</h2>
                <span className="posted light-text">{mainJournal.postedAt.toString().slice(4, 16)}</span>
            </div>
            <div className="journal-image">
                <img src={Image} alt="" />
            </div>
            <div className="journal-desc">
                {
                    //TODO here use expression to destructure description with \n \t and other shorts
                    `${mainJournal.description.slice(0, 900)}`
                }
                <br />
                {
                    `    ${mainJournal.description.slice(100)}`
                }
            </div>
            <div className="journal-actions">
                <div>
                    <div className="dark-text comments">
                        <span>Comments</span>
                        <i className={`fa fa-angle-${isCommentBoxOpen ? "up" : "down"} bold`} onClick={()=>openComments}></i>
                    </div>
                    <div className="actions">
                        {/* TODO Replace angle down to like 1=>thumb 2=> share 3=>download  */}

                        <i className="fa fa-heart   " style={{ color: mainJournal.likes.isLiked ? "#ff0000" : "#000" }} onClick={()=>likeJournal({journalId:mainJournal._id})}>
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
                    {
                        comments.map((comment, index) => <ParentComment key={index} commentId={comment._id} username={comment.username} comment={comment.comment} commentedAt={comment.commentedAt} likes={comment.likes} />)
                    }
                    <div className="load-more">
                        <span>
                            <i className="fa fa-angle-down">Load More</i>
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