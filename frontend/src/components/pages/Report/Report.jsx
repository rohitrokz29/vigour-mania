import React from 'react'
import { useUserContext } from '../../hooks/useUserContext'
import { useThemeContext } from '../../hooks/useThemeContext';

const Report = () => {
    const { user } = useUserContext();
    const { theme } = useThemeContext();
    return (
        <form className='report-form'>
            <div className="report-input">
                <label htmlFor="username">Username:</label>
                <input type="text" name='username' id='username' value={user?.username} disabled />
            </div>
            <div className="report-input">
                <label htmlFor="email" >Email:</label>
                <input type="text" name='email' id='email' value={user?.email} disabled />
            </div>
            <div className="report-input">
                <label htmlFor="issue_type">Issue Type:</label>
                <input type="text" name="issue_type" id="issue_type" />
            </div>
            <div className="report-input">
                <label htmlFor="issue">Issue:</label>
                <textarea type="text" name="issue" id="issue" />
            </div>
            <div className="report-input">
                <input type="checkbox" name="confirm" id="confirm" />
                <label htmlFor="confirm">By submitting this report you take the responsiblity of provided information</label>
            </div>

        </form>
    )
}

export default Report