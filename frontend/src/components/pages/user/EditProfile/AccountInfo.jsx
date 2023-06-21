

const AccountInfo = () => {
    return (
      <>
        <EditorHeading heading="Account Info" />
        <ul className="inputs">
          <li className="input ">
            <label htmlFor="bio">Bio:&nbsp;</label>
            <input className='input-style' type="text" name='bio' id='bio' value="User Bio" />
          </li>
          <li className="input ">
            <label htmlFor="instagram">Instagram:&nbsp;</label>
            <input className='input-style' type="text" name='instagram' placeholder='Instagram Username' id='instagram' />
          </li>
          <li className="input ">
            <label htmlFor="twitter">Twitter:&nbsp;</label>
            <input className='input-style' type="text" name='twitter' placeholder='Twitter Username' id='twitter' />
          </li>
          <li className="input ">
            <label htmlFor="facebook">Facebook:&nbsp;</label>
            <input className='input-style' type="text" name='facebook' value="" placeholder='Facebook Username' id='facebook'  autocomplete="off" />
          </li>
        </ul>
        <EditorHeading heading="Change Password" />
        <ul className="inputs">
          <li className="pass-input ">
            <label htmlFor="currPassword">Current Password:&nbsp;</label>
            <input className='input-style' type="password" name='currPass' value=""placeholder=' Current Password' id='currPass' />
          </li>
          <li className="pass-input ">
            <label htmlFor="newPassword">New Password:&nbsp;</label>
            <input className='input-style' type="password" name='newPass' value="" placeholder='New Password' id='newPass' />
          </li>
          <li className="pass-input ">
            <label htmlFor="cNewPass">Confirm New Password:&nbsp;</label>
            <input className='input-style' type="password" name='cNewPass' value="" placeholder='Confirm New Password' id='cNewPass' />
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


  export default AccountInfo