import React,{useState,useEffect} from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Outlet, NavLink, Link,useLocation } from 'react-router-dom';

import './styles/navbar.css';

const Navbar = () => {

		const {pathname}=useLocation();
	
	return (
		<>
			<nav className="navbar">
			{ pathname==="/"?
				<ScrollLink className="brand"
					activeClass="br-active"
					to="home"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					<h2 className="brand-h2 brand-h2-first-child">Vigour</h2> <h2 className="brand-h2" >Mania</h2>
				</ScrollLink>:
				<Link to='/' className="brand">
					<h2 className="brand-h2 brand-h2-first-child">Vigour</h2> <h2 className="brand-h2" >Mania</h2>
				</Link>
				}
				<ul className="nav-list">

					<li className="list-item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/explore">Explore</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/signin" className="signin">Signin</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	)
}

export default Navbar