import React,{useContext} from 'react';
import UserContext from '../userContext/UserContext'
import insta from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';
import gmail from '../../assets/gmail.png';
import location from '../../assets/location.png';	

const Lower = () => {

	// const signIn = useContext(UserContext);
	const signIn=(e)=>{
		e.preventDefault();
		console.log(e);
	}


	return (
		<>
			<div className="lower">
					<div className="lower-brand">
						<a href="/" className="lower-brand-item">
							<h2  className="brand-h2-first-child" >Vigour&nbsp;</h2><h2 className="lbh2" >Mania</h2>
						</a>
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
							<a href="/"><img src={gmail} alt=""/></a>
							</li>
							<li><a href="/"><img src={whatsapp} alt=""/></a></li>
							<li><a href="/"><img src={location} alt=""/></a></li>
							<li><a href="/"><img src={insta} alt=""/></a></li>
							<li>< a href="" > <i className="fa fa-github" style={{color:"#fff",fontSize:"215%"}}/></a></li>
						</ul>
					</div>
<form onSubmit={signIn} className="contact-form Lform">
							
							
<h3 style={{color:"#000"}}>Already a user, SignIn Now</h3>
							  <div className="input-container">
   								 <label className="fa fa-envelope icon" htmlFor="sign-in-email" ></label>
							<input className="input-field" type="email" placeholder="Email" name="email" id="sign-in-email" />
							  </div>		
						<div className="input-container">
   								 <label className="fa fa-key icon" htmlFor="sign-in-password"></label>
   								 <input className="input-field" type="password" placeholder="Password" name="password" id='sign-in-password'/>
							  </div>		
						
						  <button type="submit" className="btn">Signin</button>
				</form>
				</div>	
		</>
	)
}

export default Lower