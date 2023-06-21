import React from 'react'
//components
import BasicInfo from  './BasicInfo'
import AccountInfo from './AccountInfo'
import Visiblity from './Visiblity'
//styles
import './editProfile.css'

const EditProfile = () => {
  return (
    <section className="edit-box">
      <div className="edit-container">
        {/* TODOimage update */}
        <ul className='edit-topics'>
          <li className="topic-item">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            Info
          </li>
          <li className="topic-item">
            <i class="fa fa-gear" aria-hidden="true"></i>
            Account
          </li>
          <li className="topic-item">
            <i class=" fa-solid fa-shield-halved" area-hidden="true"></i>
            Privacy
          </li>
        </ul>
        <form autoComplete="off" className="editor">
          {/* <BasicInfo/> */}
          <AccountInfo/>
          {/* <Privacy /> */}

        </form>
      </div>

    </section>
  )
}

export default EditProfile
