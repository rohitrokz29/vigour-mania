import React from 'react';
import './styles/home.css';



const Home = () => {
	return (
		<>
			<main className="main">
				<div className="home-1">
					<h3>Work Harder Get Stronger</h3>
				</div>
				<div className="home-2">
					<h1>Fitness & Sports</h1>
				</div>
				<div className="home-3">
					<button>
						<a href="/signup">Join Us</a>
						</button>
				</div>
			</main>
		</>
	)
}

export default Home