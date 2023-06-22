import React from 'react'
import { Spots, Evolve } from '../../cards/Explore';
import './explore.css'
import { Link } from 'react-router-dom';

const Head = ({ title, url }) => {
	return (
		<div className="exp-head">
			<h1 className='dark-text' >{title}</h1>
			<button  ><Link to={url}>See All</Link></button>
		</div>
	)
}
const spotlights = [
	{
		title: "Starters Zone",
		description: "Start the Journey of Vigour Mania",
		icon: "play",
		path:"/my-trackers"

	},
	{
		title: "Gym Guy's",
		//directc to exercised page
		description: "Visit Vigour Mania's Gym Section",
		icon: "dumbbell",
		path:"/journals"

	},
	{
		title: "Insights",
		//direct to blogs if login
		description: "Share your thoughts with others",
		icon: "lightbulb",
		path:"journals"
	}
]
const evolve = [
	{
		title: "Starters Zone",
		description: "Get Started in  the Journey of Vigour Mania",
		icon: "play"
	},
	{
		title: "Track  Your Progress",
		description: "See the Progress live",
		icon: "play"

	},{
		title:"Share Your Progress",
		description:"Showcase your progress with others",
		icon:"play"
	},
	{
		title: "Journal",
		description: "Read the Routinely Health, Fitness and Sports Journal", 
		icon: "play"

	},
	{
		title: "Health Guidence",
		description: "Take a look at lates and Scientific Health Recommendations"
		, icon: "play"
	}, {
		title: " Nutritional Programs",
		description: "Explore the Nutritional Programs from Research and Experiences "
		, icon: "play"
	}

]

const Explore = () => {
	return (
		<>
			<div className="explore-box">
				<div className="explore-head">
					<span className='light-text first-span'>Welcome to&nbsp; </span>
					<h1 className='dark-text'>Vigour Mania</h1><br />
					<span className='light-text'>Explore the world of Fitness and Sports</span>
				</div>
				<div className="spotlight">
					<Head title="SpotLight" url="/spotlight" />
					<div className="spot-area">
						{
							spotlights.map((item, index) => {
								return (
									<Spots key={index} index={index} title={item.title} description={item.description} icon={item.icon} path={item.path} />
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
								return <Evolve index={index} key={index} title={item.title} description={item.description} path={item.path}/>
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Explore
