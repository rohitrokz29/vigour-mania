import React from 'react'
import { useLocation } from 'react-router-dom';
//signin page component
import Signin from './forms/Signin'
//signup page Component
import Signup from './forms/Signup';
//styles 
import './accounts.css'

const Accounts = () => {
	const { pathname } = useLocation();
	return (
		<>
			<div className="accounts">
				<div className="signin-box " id='flipper'>
					{
						pathname === "/signin" ? <Signin /> : <Signup />
					}
				</div>
			</div>
		</>
	)
}
export default Accounts