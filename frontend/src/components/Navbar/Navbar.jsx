/* Dependencies*/
import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
//styles
import './navbar.css';
//components
import Profile from '../../assets/profile.webp'
//custom hooks
import { useLogout } from '../hooks/useLogout'
import { useThemeContext } from '../hooks/useThemeContext';


const Navbar = ({ isSignedIn, username }) => {
	//retrieving browser path  using useLocation hook
	const { pathname } = useLocation();
	const { logout } = useLogout();
	const { theme } = useThemeContext();

	return (
		<>
			<nav className={`navbar bg-${theme}er`}>
				{pathname === "/" ?
					<ScrollLink className="brand"
						activeClass="br-active"
						to="home"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<h2 className="brand-h2  brand-h2-first-child">Vigour</h2> <h2 className={`brand-h2 dark-text-${theme}`}  >Mania</h2>
					</ScrollLink> :
					<Link to='/' className="brand">
						<h2 className="brand-h2 brand-h2-first-child">Vigour</h2> <h2 className={`brand-h2 dark-text-${theme}`} >Mania</h2>
					</Link>
				}
				<ul className="nav-list ">

					{!isSignedIn &&
						<li className="list-item ">
							<NavLink to="/" className={` dark-text-${theme}`}>Home</NavLink>
						</li>}
					<li className="list-item">
						<NavLink to="/explore" className={` dark-text-${theme}`}>Explore</NavLink>
					</li>
					{isSignedIn ?
						<>
							<li className="list-item">
								<NavLink to="/my-trackers" className={` dark-text-${theme}`}>Trackers</NavLink>
							</li>
							<li className="list-item">
								<NavLink to="/journals" className={` dark-text-${theme}`}>Journals</NavLink>
							</li>
							<li className="list-item">
								<NavLink to="/diets" className={` dark-text-${theme}`}>Diet's</NavLink>
							</li>
							<div className="user-profile">
								<div className="user-icon acc-icon">
									<img src={Profile} alt="User" />
								</div>
								<ul className='dropdown-content'>
									<li className=" item-list">
										<i className="fa fa-user dark-text-light"></i>
										<div className='text '>
											<Link to={`/user/${username}`} className='dark-text-light username' >
												<span>{username?username:"rohit"}</span>
											</Link>
										</div>
									</li>
									<li className=" item-list">
										<i className="fa fa-book light-text"></i>
										<div className='text dark-text-light'>
											<Link to='/my-notebooks' className='dark-text-light'>Notebooks</Link>
										</div>
									</li>
									<li className=" item-list">
										<i className="fa fa-circle-exclamation dark-text-light"></i>
										<div className='text light-text'>
											<Link to='/report' className='dark-text-light'>Report</Link>
										</div>
									</li>
									<li className=" item-list">
										<i className="fa fa-right-from-bracket dark-text-light"></i>
										<div className='text '>
											<Link className='dark-text-light' onClick={logout}>Log Out</Link>
										</div>
									</li>
								</ul>
							</div>
						</>
						:
						<li className="list-item">
							<NavLink to="/signin" className={` dark-text-${theme}`}>Signin</NavLink>
						</li>
					}
				</ul>
			</nav>

			<Outlet />
		</>
	)
}
Navbar.propTypes = {
	isSignedIn: PropTypes.bool,
	username: PropTypes.string
}
export default Navbar