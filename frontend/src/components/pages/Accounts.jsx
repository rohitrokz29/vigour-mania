import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom';
import Signin from './forms/Signin'
import Signup from './forms/Signup';

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