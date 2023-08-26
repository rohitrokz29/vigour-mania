import React from 'react';
import { Link } from 'react-router-dom';
//styles
import './home.css';
//components
import Features from './Features';
import Contacts from './Contacts';
import Lower from './Lower';

const Home = () => {
	return (
		<>
			<main className="main" id="home" >
				<div className="home-1">
					<h3>Work Harder Get Stronger</h3>
				</div>
				<div className="home-2">
					<h1>Fitness & Sports</h1>
				</div>
				<div className="home-3">

					<Link  to="/signup" role='joinus-button'>
						Join Us
					</Link>
				</div>
			</main>
			<Features />
			<Contacts />
			<Lower />
		</>
	)
}

export default Home