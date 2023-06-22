import React, { useState } from 'react'
//components
import BasicInfo from './BasicInfo'
import AccountInfo from './AccountInfo'
import Visiblity from './Visiblity'
//styles
import './editProfile.css'

const EditProfile = ({ setEditPage }) => {

  const [page, setPage] = useState("info")
  const resetEditPage = () => {
    switch (page) {
      case "info":
        return <BasicInfo />
      case "account":
        return <AccountInfo />
      case "visiblity":
        return <Visiblity />
        default:
          return null;
    }
  }


  return (
    <section className="edit-box">
      <div className="edit-container">
        {/* TODOimage update */}
        <ul className='edit-topics'>
          <li className="topic-item" onClick={()=>setPage(page=>"info")}>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            Info
          </li>
          <li className="topic-item" onClick={()=>setPage(page=>"account")}>
            <i className="fa fa-gear" aria-hidden="true" ></i>
            Account
          </li>
          <li className="topic-item"  onClick={()=>setPage(page=>"visiblity")}>
            <i className=" fa-solid fa-shield-halved" area-hidden="true"></i>
            Privacy
          </li>

          <li className="topic-item" onClick={() => setEditPage(editPage => !editPage)}>
            <i className=" fa-solid fa-close" area-hidden="true"></i>
            Close
          </li>
        </ul>
        <form autoComplete="off" className="editor">
          {
              resetEditPage()
          }

        </form>
      </div>

    </section>
  )
}

export default EditProfile
