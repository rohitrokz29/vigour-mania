
const BasicInfo = () => {
    return (
      <>
        <EditorHeading heading="Basic Details" />
        <ul className="inputs">
          <li className="input ">
            <label htmlFor="email">Email:&nbsp;</label>
            <input className='input-style' type="email" name='email' id='email' value={"accibo@mail.acc"}  autoComplete="off"disabled="true" />
          </li>
          <li className="input ">
            <label htmlFor="name">Name:&nbsp;</label>
            <input className='input-style' type="text" name='name' placeholder='Name' id='name'autoComplete="off" />
          </li>
          <li className="input ">
            <label htmlFor="gender">Gender:&nbsp;</label>
            <select className='input-style' name='gender' id='gender' placeholder='Gender' autoComplete="off">
              <option value="" disabled selected>Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="n">Prefer not to say</option>
            </select>
          </li>
          <li className="input ">
            <div className="save-button large-text">
              Save
            </div>
          </li>
        </ul>
      </>
    )
  }

  export default BasicInfo