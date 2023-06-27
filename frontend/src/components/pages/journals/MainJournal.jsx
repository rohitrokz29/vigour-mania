import React, { useState } from 'react'
import PropTypes from 'prop-types'
//assets
import Image from '../../../assets/1.jpg'
import { ParentComment } from './Comments'
const MainJournal = ({ title, description, postedAt }) => {
    const comments = [
        {
            username: "jackJill",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: new Date(),
            likes: 0,
            replies: [
                {
                    username: "Jack daniel",
                    comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
                    commentedAt: new Date(),
                    likes: 0
                },

                {
                    username: "Jack daniel",
                    comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
                    commentedAt: new Date(),
                    likes: 0
                },
                {
                    username: "Jack daniel",
                    comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
                    commentedAt: new Date(),
                    likes: 0
                },
                {
                    username: "Jack daniel",
                    comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
                    commentedAt: new Date(),
                    likes: 0
                }
            ]
        },
        {
            username: "jackJill",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: new Date(),
            likes: 0
        }, {
            username: "jackJill",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: new Date(),
            likes: 0
        }, {
            username: "jackJill",
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, sequi odit, explicabo, eos voluptatem non quaerat labore aut laudantium nihil natus molestiae adipisci illo? Delectus quidem velit ad necessitatibus consectetur?",
            commentedAt: new Date(),
            likes: 0
        }
    ]
    const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)
    const openComments = () => {
        setIsCommentBoxOpen(prevState => !prevState);
    }
    return (
        <>
            <div className="journal-title">
                <h2>{title}</h2>
                <span className="posted light-text">{postedAt.toString().slice(4, 16)}</span>
            </div>
            <div className="journal-image">
                <img src={Image} alt="" />
            </div>
            <div className="journal-desc">
                {
                    //TODO here use expression to destructure description with \n \t and other shorts
                    `${description.slice(0, 900)}`
                }
                <br />
                {
                    `    ${description.slice(100)}`
                }
            </div>
            <div className="journal-actions">
                <div>
                    <div className="dark-text comments">
                        <span>Comments</span>
                        <i className={`fa fa-angle-${isCommentBoxOpen ? "up" : "down"} bold`} onClick={openComments}></i>
                    </div>
                    <div className="actions">
                        {/* TODO Replace angle down to like 1=>thumb 2=> share 3=>download  */}

                        <i className="fa fa-angle-down bold  ">
                            {<span>10</span>}
                        </i>
                        <i className="fa fa-angle-down bold "></i>
                        <i className="fa fa-angle-down bold "></i>

                    </div>
                </div>
            </div>
            {
                isCommentBoxOpen &&
                <div className="comments-box "  >
                    {
                        comments.map((comment, index) => <ParentComment key={index} username={comment.username} comment={comment.comment} commentedAt={comment.commentedAt} likes={comment.likes} replies={comment.replies} />)
                    }
                    <div className="load-more">
                        <span>
                            <i className="fa fa-angle-down"></i>
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