import React from 'react';

import {Outlet, NavLink,Link } from 'react-router-dom';

import './styles/navbar.css';

const Navbar = () => {
	return (
		<>
		<nav className="navbar">

				<Link to='/' className="brand">
					{/*<img  src={Logo}   alt="LOGO"/>*/}
					<h2 >Vigour</h2> <h2 >Mania</h2>
				</Link>
				<ul className="nav-list">

					<li className="list-item">
					<NavLink to="/">Home</NavLink>
					 </li>
					<li className="list-item">
						<NavLink to="/explore">Explore</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/features">Features</NavLink>

					</li>
					<li className="list-item">
						<NavLink to="/contacts">Contacts</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/signin" className="signin">Signin</NavLink>
					</li>
				</ul>
		</nav>
		<Outlet/>
		</>
	)
}

export default Navbar