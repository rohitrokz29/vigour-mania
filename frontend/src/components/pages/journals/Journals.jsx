import React from 'react'
import { Link } from 'react-router-dom'
//components
import Heads from '../../cards/Heads'
//MainJournal-- representing current latest Journal
import MainJournal from './MainJournal'
//Side Journal representing previous journals 
import SideJournal from './SideJournal'
//styles
import './journal.css'



const Journals = () => {
    const desc = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque \taudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat volupta\taudantium, totam rem aperia\nm, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam q\nuaerat voluptatem. Ut
    enim ad minima veniam, quis nostrum exercitationem ullam sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla \n`
    const date = new Date();
    const journals = [
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremques iste natus edatees iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },
        { title: "thi si thi si titles", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ", postedAt: date },

    ]
    return (
        <>
            <div className="journal-container">
                <div className="main-journal">
                    <Heads heading="Weekly Journal" />
                    <MainJournal title="Title of the Journal" description={desc} postedAt={date} />
                </div>
                <div className="side-journals">
                    <h2>Previous Journals</h2>
                    {
                        journals.map((item, index) => <SideJournal key={index} title={item.title} description={item.description} postedAt={date} />)
                    }
                    <div className="load-more ">
                        <span>
                            <i className="fa fa-angle-down"></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journals 