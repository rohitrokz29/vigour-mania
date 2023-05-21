import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">

				<a href='/' className="brand">
					{/*<img  src={Logo}   alt="LOGO"/>*/}
					<h2 >Vigour</h2> <h2 >Mania</h2>
				</a>
				<ul className="nav-list">

					<li className="list-item">
					<a href="/">Home</a>
					 </li>
					<li className="list-item">
						<a href="/explore">Explore</a>
					</li>
					<li className="list-item">
						<a href="/features">Features</a>

					</li>
					<li className="list-item">
						<a href="/contsct">Contacts</a>
					</li>
					<li className="list-item">
						<a href="/signin" className="signin">Signin</a>
					</li>
				</ul>
		</nav>
	)
}

export default Navbar