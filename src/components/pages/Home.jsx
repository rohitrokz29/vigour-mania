import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';

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
					<button>
						<Link to="/signup">Join Us</Link>
						</button>
				</div>
			</main>
			
			<Features />

			<Contacts />

			<Lower/>
		</>
	)
}

export default Home