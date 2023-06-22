import EditorHeading from './EditorHeading'

const AccountInfo = () => {
    return (
      <>
        <EditorHeading heading="Account Info" />
        <ul className="inputs">
          <li className="input ">
            <label htmlFor="bio">Bio:&nbsp;</label>
            <input className='input-style'  autoComplete="off"  type="text" name='bio' id='bio' placeholder="User Bio" />
          </li>
          <li className="input ">
            <label htmlFor="instagram">Instagram:&nbsp;</label>
            <input className='input-style'  autoComplete="off"  type="text" name='instagram' placeholder='Instagram Username' id='instagram' />
          </li>
          <li className="input ">
            <label htmlFor="twitter">Twitter:&nbsp;</label>
            <input className='input-style'  autoComplete="off"  type="text" name='twitter' placeholder='Twitter Username' id='twitter' />
          </li>
          <li className="input ">
            <label htmlFor="facebook">Facebook:&nbsp;</label>
            <input className='input-style'   autoComplete="off"  type="text" name='facebook' placeholder='Facebook Username' id='facebook'/>
          </li>
        </ul>
        <EditorHeading heading="Change Password" />
        <ul className="inputs">
          <li className="pass-input ">
            <label htmlFor="currPassword">Current Password:&nbsp;</label>
            <input className='input-style' autoComplete="off"  type="password" name='currPass' placeholder=' Current Password' id='currPass' />
          </li>
          <li className="pass-input ">
            <label htmlFor="newPassword">New Password:&nbsp;</label>
            <input className='input-style'  autoComplete="off"  type="password" name='newPass' placeholder='New Password' id='newPass' />
          </li>
          <li className="pass-input ">
            <label htmlFor="cNewPass">Confirm New Password:&nbsp;</label>
            <input className='input-style'   autoComplete="off"  type="password" name='cNewPass' placeholder='Confirm New Password' id='cNewPass' />
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