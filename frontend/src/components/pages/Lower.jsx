import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import insta from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';
import gmail from '../../assets/gmail.png';
import location from '../../assets/location.png';
import { useSignin } from '../hooks/useSignin';

const Lower = () => {

	const { signin, isLoading, error } = useSignin();
	const [data, setData] = useState({ email: "", password: "" });
	const handleSubmit = (e) => {
		e.preventDefault();
		signin(data);
	}
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return (
		<>
			<div className="lower">
				<div className="lower-brand">
					<Link className="lower-brand-item"
						activeClass="br-active"
						to="home"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<h2 className="brand-h2-first-child" >Vigour&nbsp;</h2><h2 className="lbh2" >Mania</h2>
					</Link>
					<p>
						Vigour Mania,134 Fitness Park,near City Mall, Dummy City, 443412
					</p>
				</div>
				<div className="Linfo">
					<div className="services">
						<h4>Services</h4>
						<ul>
							<li>Routinely Updates</li>
							<li>Better Diet Plans</li>
							<li>Advices</li>
							<li>Notes</li>
						</ul>
					</div>
					<div className="app-features">
						<h4>Application Features</h4>
						<ul>
							<li>Track Your Progreas</li>
							<li>Health Discussions</li>
							<li>Compete With Others Progress</li>
							<li>Secure Data</li>
						</ul>
					</div>
					<div className="grid-fill">
						<h4>Our Aim</h4>
						<ul>
							<li>Guide People for Better Health</li>
							<li>Provide Efficient Techniques</li>
						</ul>
					</div>
				</div>
				<div className="lower-contact">
					<ul>
						<li>
							<a href="/"><img src={gmail} alt="" /></a>
						</li>
						<li><a href="/" target="_blank"><img src={whatsapp} alt="" /></a></li>
						<li><a href="/" target="_blank"><img src={location} alt="" /></a></li>
						<li><a href="/" target="_blank"><img src={insta} alt="" /></a></li>
						<li>< a href="" target="_blank"> <i className="fa fa-github" style={{ color: "#fff", fontSize: "215%", paddingBock: "10%" }} /></a></li>
					</ul>
				</div>
				<form onSubmit={handleSubmit} className="contact-form Lform">
					<h3 style={{ color: "#000" }}>Already a user, SignIn Now</h3>
					<div className="input-container">
						<label className="fa fa-envelope icon" htmlFor="sign-in-email" ></label>
						<input className="input-field" type="email" autoComplete='on' placeholder="Email" name="email" id="sign-in-email" value={data.email} onChange={handleChange} />
					</div>
					<div className="input-container">
						<label className="fa fa-key icon" htmlFor="sign-in-password"></label>
						<input className="input-field" type="password" autoComplete='on' placeholder="Password" name="password" id='sign-in-password' value={data.password} onChange={handleChange} />
					</div>

					<button type="submit" className="btn">Signin</button>
					<div className="input-container">
						{error &&
							<div className="error error-text">
								{error}
							</div>
						}
					</div>
				</form>
			</div>
		</>
	)
}

export default Lower