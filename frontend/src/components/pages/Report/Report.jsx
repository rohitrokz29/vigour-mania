import React from 'react';
import './report.css';
import { useUserContext } from '../../hooks/useUserContext'
import { useThemeContext } from '../../hooks/useThemeContext';

const Report = () => {
    const { user } = useUserContext();
    const { theme } = useThemeContext();
    return (
        <form className={`report-form bg-${theme}er`}>

            <div className={`report-side bg-${theme}`}>
                <h2 className={`dark-text-${theme}`}>Report the problem to us</h2>
                <h4 className={`light-text-${theme}`}>We will try our best to take your report into consideration.</h4>
            </div>
            <div className={`form bg-${theme}`}>
                <div className="report-input">
                    <label htmlFor="username" className={`dark-text-${theme}`}>Username:</label>
                    <input type="text" name='username' id='username' value={user?.username || 'rrohiut'} disabled />
                </div>
                <div className="report-input">
                    <label htmlFor="email" className={`dark-text-${theme}`}>Email:</label>
                    <input type="email" name='email' id='email' value={user?.email || 'erjnk4,'} disabled />
                </div>
                <div className="report-input">
                    <label htmlFor="issue_type" className={`dark-text-${theme}`}>Issue Type:</label>
                    <select name="issur_type" id="issue_type">
                        <option value={null}>Choose Issue Type</option>
                        <option value="report_user">Report a user</option>
                        <option value="journal">Any Problem with Journal</option>
                        <option value="trackers">Tracking Graphs</option>
                        <option value="Others">Other Issue</option>

                    </select>
                </div>
                <div className="report-input">
                    <label htmlFor="issue" className={`dark-text-${theme}`}>Issue:</label>
                    <textarea type="text" name="issue" id="issue" />
                </div>
                <div className="report-check">
                    <input type="checkbox" name="confirm" id="confirm" />
                    <label htmlFor="confirm" className={`dark-text-${theme}`}>By submitting this report you take the responsiblity of provided information</label>
                </div>
                <div className="report-input-button">
                    <button className="add-button" type='submit'>Report</button>
                </div>

            </div>
        </form>
    )
}

export default Report