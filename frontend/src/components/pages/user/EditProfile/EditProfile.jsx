import React, { useState } from 'react'
//components
import BasicInfo from './BasicInfo'
import AccountInfo from './AccountInfo'
import Visiblity from './Visiblity'
//styles
import './editProfile.css'
import API from '../../../api/api'

const EditProfile = ({ setEditPage, user }) => {
  const { email, gender, name, bio, instagram, twitter, facebook, visiblity } = user
  const [page, setPage] = useState("info")
  const [newData, setNewData] = useState({ email, gender, name, bio, instagram, twitter, facebook, visiblity })

  const SubmitData = async () => {
    console.log(newData)
    const result = await API.put('/api/user/edit/details', newData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response)
          // setNewData(response.data);
        }
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  const resetEditPage = () => {
    switch (page) {
      case "info":
        return <BasicInfo newData={newData} setNewData={setNewData} />
      case "account":
        return <AccountInfo newData={newData} setNewData={setNewData} />
      case "visiblity":
        return <Visiblity newData={newData} setNewData={setNewData} />
      default:
        return null;
    }
  }



  return (
    <section className="edit-box">
      <div className="edit-container">
        {/* TODOimage update */}
        <ul className='edit-topics'>
          <li className="topic-item" onClick={() => setPage(page => "info")}>
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            Info
          </li>
          <li className="topic-item" onClick={() => setPage(page => "account")}>
            <i className="fa fa-gear" aria-hidden="true" ></i>
            Account
          </li>
          <li className="topic-item" onClick={() => setPage(page => "visiblity")}>
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
          <div className="add-button large-text" onClick={SubmitData}>
            Save
          </div>
        </form>
      </div>

    </section>
  )
}

export default EditProfile
