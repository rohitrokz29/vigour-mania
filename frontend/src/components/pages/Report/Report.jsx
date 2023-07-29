import React, { useState, useSyncExternalStore } from 'react';
import './report.css';
import { useUserContext } from '../../hooks/useUserContext'
import { useThemeContext } from '../../hooks/useThemeContext';
import API from '../../api/api';

const Report = () => {
    const { user } = useUserContext();
    const { theme } = useThemeContext();
    const [reportData, setReportData] = useState({username:user?.username,issue_type:"",issue:""})
   const [confirm, setConfirm] = useState(true);
   
    const handleChange=(e)=>{
    setReportData({...reportData,[e.target.name]:e.target.value})
   }
    const handleReport = (e) => {
        e.preventDefault();
        console.log({reportData,confirm});

        API.post('/api/report')
    }
    return (
        <form className={`report-form bg-${theme}er`} onSubmit={handleReport} >

            <div className={`report-side bg-${theme}`}>
                <h2 className={`dark-text-${theme}`}>Report the problem to us</h2>
                <h4 className={`light-text-${theme}`}>We will try our best to take your report into consideration.</h4>
            </div>
            <div className={`form bg-${theme}`}>
                <div className="report-input">
                    <label htmlFor="username" className={`mid-text dark-text-${theme}`}>Username:</label>
                    <input type="text" name='username' id='username' value={user?.username || 'rrohiut'} disabled />
                </div>
                <div className="report-input">
                    <label htmlFor="issue_type" className={`mid-text dark-text-${theme}`}>Issue Type:</label>
                    <select name="issue_type" id="issue_type" value={reportData.issue_type} onChange={handleChange}>
                        <option value="null">Choose Issue Type</option>
                        <option value="report_user">Report a user</option>
                        <option value="journal">Any Problem with Journal</option>
                        <option value="trackers">Tracking Graphs</option>
                        <option value="Others">Other Issue</option>

                    </select>
                </div>
                <div className="report-input">
                    <label htmlFor="issue" className={`mid-text dark-text-${theme}`}>Issue Description:</label>
                    <textarea type="text" name="issue" id="issue"  onChange={handleChange} />
                </div>
                <div className="report-check">
                    <input type="checkbox" name="confirm" id="confirm"  defaultChecked  onChange={(e)=>setConfirm(confirm=>!confirm)}/>
                    <label htmlFor="confirm" className={`mid-text dark-text-${theme}`} >By submitting this report you take the responsiblity of provided information</label>
                </div>
                <div className="report-input-button ">
                    <button className="add-button" type='submit'>Report</button>
                </div>

            </div>
        </form>
    )
}

export default Report