import React, { useState } from 'react';
//components
import Heads from '../../cards/Heads';
//assets 
import whatsapp from '../../../assets/whatsapp.png';
import insta from '../../../assets/instagram.png';
import gmail from '../../../assets/gmail.png';
import location from '../../../assets/location.png';

const Contacts = () => {

	//contct form data
	const [data, setData] = useState({ name: "", email: "", mobile: "" });
	
	// on change event on inputs
	const handleChange = (e) => {
		const { name, value } = e.target
		setData({ ...data, [name]: value });
	}
	
	//on sending contact request
	const sendRequest = (e) => {
		e.preventDefault();
//TODO sending the response to server is remaining
	}

	return (
		<>
			<Heads heading={"Contacts"} id={"contact"} />
			<div className="contact-box">
				<div className="contacts">
					<h2>We love hearing from our visitors!</h2>
					<p>
						Get in touch with us:  Whether you have a question, feedback, or simply want to say hello, we're here to help.
					</p>
					<ul className="ways">
						<li>
							<img src={location} alt="L" />
							<p className="location">
								Vigour Mania,134 Fitness Park,near City Mall, Dummy City, 443412
							</p>
						</li>
						<li>
							<img src={whatsapp} alt="L" />
							<p className="whatsapp">
								+91 987654321
							</p>
						</li>
						<li>
							<img src={gmail} alt="L" />
							<p className="gmail">
								<a href="/#">r.s.kharche0098@gmail.com</a>
							</p>
						</li><li>
							<img src={insta} alt="L" />
							<p className="insta">
								<a href="">vigour_mania_134</a>
							</p>
						</li>
					</ul>
				</div>
				<form onSubmit={sendRequest} className="contact-form">
					<h3>Fill the Form to Get in touch with Us</h3>
					<div className="input-container">
						<label className="fa fa-user icon" htmlFor="name" ></label>
						<input className="input-field" type="text" autoComplete='on' placeholder="Your Name" name="name" id="name" value={data.name} onChange={handleChange} />
					</div>
					<div className="input-container">
						<label className="fa fa-envelope icon" htmlFor="email" ></label>
						<input className="input-field" type="email" autoComplete='on' placeholder="Email" name="email" id="email" value={data.email} onChange={handleChange} />
					</div>
					<div className="input-container">
						<label className="fa fa-phone icon" htmlFor="mobile"></label>
						<input className="input-field" type="tel" autoComplete='on' placeholder="Mobile Number" name="mobile" id='mobile' value={data.mobile} onChange={handleChange} />
					</div>
					<button type="submit" className="btn">Send Request</button>
				</form>
			</div>
		</>
	)
}

export default Contacts