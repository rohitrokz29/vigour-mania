import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
	const [data, setData] = useState({ name: "", email: "", password: '' })
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	}
	return (
		<>
			<form className="signin-form">
				<h2 style={{ paddingBlock: "4%" }}>Sign In </h2>



				<div className="input-container">
					<label className="fa fa-envelope icon" htmlFor="email" ></label>
					<input className="input-field" type="email" placeholder="Email" name="email" id="email" value={data.email} onChange={handleChange} />
				</div>
				<div className="input-container">
					<label className="fa fa-key icon" htmlFor="password"></label>
					<input className="input-field" type="password" placeholder="Password" name="password" id='password' value={data.password} onChange={handleChange} />
				</div>

				<button type="submit" className="btn">Signin</button>


			</form>
			<div className="signin-side">
				<h3>Welcome Back to the world of </h3>
				<h1 className="brand-h2 brand-h2-first-child">Vigour</h1>
				<br />
				<h1 className="brand-h2">Mania</h1>
				<br />
				<br />
				<br />
				<Link to="/signup" style={{ color: "#000" }}>New User? Create Account </Link>
			</div>
		</>
	)
}

export default Signin
