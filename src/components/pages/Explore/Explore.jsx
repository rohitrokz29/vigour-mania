import React from 'react'
import { Spots, Evolve } from '../../cards/Explore';
import '../../styles/explore.css'
import { Link } from 'react-router-dom';



const Head = ({ title, url }) => {
	return (
		<div className="exp-head">
			<h1 className='dark-text' >{title}</h1>
			<button  ><Link to={url}>See All</Link></button>
		</div>
	)
}

const Explore = () => {

	const spotlights = [
		{
			title: "Starters Zone",
			description: "Get Started in  the Journey of Vigour Mania"
		},
		{
			title: "Gym Guy's",
			//directc to exercised page
			description: "Visit Vigour Mania's Gym Section"
		},
		{
			title: "Insights",
			//direct to blogs if login
			description: "Share your thoughts with others"
		}
	]
	const evolve = [
		{
			title: "Starters Zone",
			description: "Get Started in  the Journey of Vigour Mania"
		},
		{
			title: "Track and Share Your Progress",
			description: "Showcase your progress infront of others"
		},
		{
			title: "Journal",
			description: "Read the Routinely Health, Fitness and Sports Journal"
		},
		{
			title: "Health Guidence",
			description: "Take a look at lates and Scientific Health Recommendations"
		}, {
			title: "Improved Nutritional Programs",
			description: "Explore the Nutritional Programs from Research and Experiences "
		}

	]
	return (
		<>
			<div className="explore-box">
				<div className="explore-head">
					<span className='light-text first-span'>Welcome to&nbsp; </span>
					<h1 className='dark-text'>Vigour Mania</h1><br />

					<span className='light-text'>Explore the world of Fitness and Sports</span>
				</div>
				<div className="spotlight">
					<Head title="SpotLight" url="/spotlight"/>
					<div className="spot-area">
						{
							spotlights.map((item, index) => {
								return (
									<Spots key={index} title={item.title} description={item.description} />
								)
							})
						}
					</div>
				</div>
				<div className="exp-evolved">
							<Head title="Get Evolved" url='/get-evolved' />
					<div className="evo-area">
						{
							evolve.map((item, index) => {
								return <Evolve key={index} title={item.title} description={item.description} />
							})
						}
					</div>

				</div>
			</div>
		</>
	)
}

export default Explore
