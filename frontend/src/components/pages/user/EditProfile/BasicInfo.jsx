import { useState } from 'react'
import EditorHeading from './EditorHeading'

const BasicInfo = ({newData,setNewData}) => {

  const handleChange=(e)=>{
    setNewData({...newData,[e.target.name]:e.target.value})
  }
    return (
      <>
        <EditorHeading heading="Basic Details" />
        <ul className="inputs">
          <li className="input ">
            <label htmlFor="email">Email:&nbsp;</label>
            <input className='input-style' type="email" name='email' id='email' value={newData.email||"accibo@mail.acc"}  autoComplete="off" readOnly />
          </li>
          <li className="input ">
            <label htmlFor="name">Name:&nbsp;</label>
            <input className='input-style' type="text" name='name'value={newData.name||""} onChange={handleChange} placeholder='Name'   id='name'autoComplete="off" />
          </li>
          <li className="input ">
            <label htmlFor="gender">Gender:&nbsp;</label>
            <select className='input-style' value={newData.gender||"m"} onChange={handleChange}  name='gender' id='gender' placeholder='Gender' autoComplete="off">
              {/* <option value={""}selected>Gender</option> */}
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="n">Prefer not to say</option>
            </select>
          </li>
       
        </ul>
      </>
    )
  }

  export default BasicInfo