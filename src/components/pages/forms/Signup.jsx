import React,{useState} from 'react'
import{Link} from 'react-router-dom'
const Signup = () => {
	
	const [data, setData ]= useState({name:"",email:"",password:''})
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});}
	return (
		<>
			
<form    className="signup-form">
							<h2 style={{paddingBlock:"4%"}}>Sign Up </h2>
						
							

							  <div className="input-container">
   								 <label className="fa fa-user-tie icon" htmlFor="name" ></label>
							<input className="input-field" type="text" placeholder="Name" name="name" id="name" value={data.email}  onChange={handleChange}/>
							  </div>	

							  <div className="input-container">
   								 <label className="fa fa-user icon" htmlFor="username" ></label>
							<input className="input-field" type="text" placeholder="Username for Account" name="username" id="username" value={data.email}  onChange={handleChange}/>
							  </div>	
							  <div className="input-container">
   								 <label className="fa fa-envelope icon" htmlFor="email" ></label>
							<input className="input-field" type="email" placeholder="Email" name="email" id="email" value={data.email}  onChange={handleChange}/>
							  </div>	
							 <div className="input-container">
   								 <label className="fa fa-key icon" htmlFor="password"></label>
   								 <input className="input-field" type="password" placeholder="Password" name="password" id='password' value={data.password} onChange={handleChange} />
							  </div>		
						
						  <button type="submit" className="btn">SignUp</button>


					</form>
					<div className="signup-side">
						<h3>Get Entered in the World of </h3>
						<h1 className="brand-h2 brand-h2-first-child">Vigour</h1>
						<br/>
						<h1 className="brand-h2">Mania</h1>
						<br/>
						<br/>
						<br/>
						<Link to="/signin" style={{color:"#000"}}>Already a User? Signin-></Link>
					</div>
		
		</>
	)
}

export default Signup