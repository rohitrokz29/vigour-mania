import React from 'react';
import { Link } from 'react-router-dom';
//styles of error page
import './error.css';
const Error = () => {
    return (
        <>
            <div className="error ">
                <h1 >404</h1>
                <div className="error-tag">
                    Page you are trying to visit does not Exist
                </div>
                <div className='shaker'>
                    <Link to="/" className='shake-element'>Go To Home Page</Link>

                </div>
            </div>
        </>
    )
}

export default Error