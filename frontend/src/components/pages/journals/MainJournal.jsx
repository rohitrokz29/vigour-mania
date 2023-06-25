import React from 'react'
import Image from '../../../assets/1.jpg'
const MainJournal = ({ title, description, postedAt }) => {
    return (
        <>
            <div className="journal-title">
                <h2>{title}</h2>
                <span className="posted light-text">{postedAt}</span>
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
                        <i className="fa fa-angle-down bold"></i>
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
        </>
    )
}

export default MainJournal