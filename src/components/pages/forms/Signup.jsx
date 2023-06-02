import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'
import { useUserContext } from '../../hooks/useUserContext'

const Signup = () => {

	const { isSignedIn } = useUserContext();
	useEffect(() => {
		if (isSignedIn) {
			redirect('/explore');
		}
	}, []);
	const [data, setData] = useState({ username: "", email: "", password: '' })
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	const { SignUp, error, isLoading } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data)
		SignUp(data);

	}

	return (
		<>

			<form onSubmit={handleSubmit} className="signup-form">
				<h2 style={{ paddingBlock: "4%" }}>Sign Up </h2>





				<div className="input-container">
					<label className="fa fa-user icon" htmlFor="username" ></label>
					<input className="input-field" type="text" autoComplete='on' placeholder="Username " name="username" id="username" value={data.username} onChange={handleChange} />
				</div>
				<div className="input-container">
					<label className="fa fa-envelope icon" htmlFor="email" ></label>
					<input className="input-field" type="email" placeholder="Email" autoComplete='on' name="email" id="email" value={data.email} onChange={handleChange} />
				</div>
				<div className="input-container">
					<label className="fa fa-key icon" htmlFor="password"></label>
					<input className="input-field" type="password" autoComplete='on' placeholder="Password" name="password" id='password' value={data.password} onChange={handleChange} />
				</div>

				<button type="submit" disabled={isLoading} className="btn">Sign Up</button>
				<div className="input-container">
					{error &&
						<div className="error error-text">
							{error}
						</div>
					}
				</div>

			</form>
			<div className="signup-side">
				<h3>Get Entered in the World of </h3>
				<h1 className="brand-h2 brand-h2-first-child">Vigour</h1>
				<br />
				<h1 className="brand-h2">Mania</h1>
				<br />
				<br />
				<br />
				<Link to="/signin" style={{ color: "#000" }}>Already a User? Signin</Link>
			</div>

		</>
	)
}

export default Signup