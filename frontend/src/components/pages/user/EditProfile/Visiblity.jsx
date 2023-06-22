import EditorHeading from './EditorHeading'

const Visiblity = () => {
    return (
      <>
        <EditorHeading heading="Account Privacy" />
        <div className="privacy editor-head">
          Change Account Privacy
          <br />
          By settinng your account public you allow other users also to see your profile page and bookmark your account.
        </div>
        <div className="curr-visiblity ">
          Currently your account is {"public"}
  
          <div className=" ">
            <label htmlFor="visibity">Change Visiblity:&nbsp;</label>
            <select name='visiblity' id="visiblity" className="change-visiblity ">
              <option value="public" disabled selected hidden>Public </option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>
  
      </>
    )
  }
  export default Visiblity