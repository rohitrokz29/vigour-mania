import PropTypes from 'prop-types'
import EditorHeading from './EditorHeading'

const AccountInfo = ({ newData, setNewData }) => {
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
  }


  return (
    <>
      <EditorHeading heading="Account Info" />
      <ul className="inputs">
        <li className="edit-input">
          <label htmlFor="bio">Bio:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="text" value={newData.bio} onChange={handleChange} name='bio' id='bio' placeholder="User Bio" />
        </li>
        <li className="edit-input">
          <label htmlFor="instagram">Instagram:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="text" value={newData.bioinstagram} onChange={handleChange} name='instagram' placeholder='Instagram Username' id='instagram' />
        </li>
        <li className="edit-input">
          <label htmlFor="twitter">Twitter:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="text" value={newData.twitter} onChange={handleChange} name='twitter' placeholder='Twitter Username' id='twitter' />
        </li>
        <li className="edit-input">
          <label htmlFor="facebook">Facebook:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="text" value={newData.facebook || ""} onChange={handleChange} name='facebook' placeholder='Facebook Username' id='facebook' />
        </li>
      </ul>
      <EditorHeading heading="Change Password" />
      <ul className="inputs">
        <li className="pass-input ">
          <label htmlFor="currPassword">Current Password:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="password" onChange={handleChange} name='currPass' placeholder=' Current Password' id='currPass' />
        </li>
        <li className="pass-input ">
          <label htmlFor="newPassword">New Password:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="password" onChange={handleChange} name='newPass' placeholder='New Password' id='newPass' />
        </li>
        <li className="pass-input ">
          <label htmlFor="cNewPass">Confirm New Password:&nbsp;</label>
          <input className='input-style' autoComplete="off" type="password" onChange={handleChange} name='cNewPass' placeholder='Confirm New Password' id='cNewPass' />
        </li>

      </ul>
    </>
  )
}


AccountInfo.propTypes = {
  newDate: PropTypes.object,
  setNewData: PropTypes.func
}

export default AccountInfo