import React, { useState, useEffect, useContext } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import './styles/navbar.css';
import Profile from '../assets/profile.webp'
import { useLogout } from './hooks/useLogout';
const Navbar = ({ isSignedIn, username }) => {

	const { pathname } = useLocation();
	const { logout } = useLogout();
	return (
		<>
			<nav className="navbar">
				{pathname === "/" ?
					<ScrollLink className="brand"
						activeClass="br-active"
						to="home"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<h2 className="brand-h2 brand-h2-first-child">Vigour</h2> <h2 className="brand-h2" >Mania</h2>
					</ScrollLink> :
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

					{isSignedIn ?
						<>
							<li className="list-item">
								<NavLink to="/journals">Journals</NavLink>
							</li>
							<li className="list-item">
								<NavLink to="/diets">Diet's</NavLink>
							</li>
							<div class="user-profile">
								<div class="user-icon acc-icon">
									<img src={Profile} alt="User Icon" />
								</div>
								<div class="dropdown-content">
									<ul className='profile-list'>
										<li className=" item-list">
											<i className="fa fa-user light-text"></i>
											<div className='text dark-text'>
												<Link to={username} className='dark-text username' >
													<span>{username}</span>
												</Link>
											</div>
										</li>

										<li className=" item-list">
											<i className="fa fa-book light-text"></i>
											<div className='text light-text'>
												<Link to='/my-notebooks' className='light-text'>Notebooks</Link>
											</div>
										</li>
										<li className=" item-list">
											<i className="fa fa-circle-exclamation light-text"></i>
											<div className='text light-text'>
												<Link to='report' className='light-text'>Report</Link>
											</div>
										</li>
										<li className=" item-list">
											<i className="fa fa-right-from-bracket light-text"></i>
											<div className='text '>
												<Link className='light-text' onClick={logout}>Log Out</Link>
											</div>
										</li>
										{/* <li className="items-list"><a>Notebook</a></li> */}
										{/* <li className="items-list"><a>Log Out</a></li> */}
										{/* <li className="items-list"><a>Report Us</a></li> */}

									</ul>
								</div>
							</div>
						</>
						:
						<li className="list-item">
							<NavLink to="/signin">Signin</NavLink>
						</li>
					}
				</ul>

			</nav>
			<Outlet />
		</>
	)
}

export default Navbar