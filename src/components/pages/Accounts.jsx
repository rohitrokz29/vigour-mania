import React,{useState} from 'react'

import {Link,useLocation} from 'react-router-dom';
import Signin from './forms/Signin'
import Signup from './forms/Signup'	;

const Accounts = () => {

const {pathname}=useLocation();

	const toggle=()=>{
		document.querySelector("#flipper").classList.toggle("flip");
	}

	return (
		<>

			<div className="accounts">
				
<div className="signin-box">
				
				{
					pathname==="/signin"?<Signin/>:<Signup/>


				}

			</div>			
			</div>
		</>
	)
}

export default Accounts