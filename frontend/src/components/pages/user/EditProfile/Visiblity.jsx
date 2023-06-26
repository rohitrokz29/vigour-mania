import PropTypes from 'prop-types'
import EditorHeading from './EditorHeading'

//Visiblity component of edit profile page
const Visiblity = ({ newData, setNewData }) => {
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value })
  }
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
          <select name='visiblity' id="visiblity" defaultValue={newData.visiblity} onChange={handleChange} className="change-visiblity ">
            <option value="public" >Public </option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>

    </>
  )
}

Visiblity.propTypes = {
  newDate: PropTypes.object,
  setNewData: PropTypes.func
}
export default Visiblity