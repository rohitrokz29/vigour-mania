import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
//importing cards
import { Spots, Evolve } from '../../cards/Explore';
//styles  of  page
import './explore.css'

import { useThemeContext } from '../../hooks/useThemeContext';


// Headings used in explore page
const Head = ({ title, url }) => {
	const { theme } = useThemeContext();
	return (
		<div className="exp-head">
			<h1 className={`dark-text-${theme}`} >{title}</h1>
			<button  ><Link to={url}>See All</Link></button>
		</div>
	)
}
Head.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
}
const Explore = () => {
	const { theme } = useThemeContext();
	const spotlights = [
		{
			title: "Starters Zone",
			description: "Start the Journey of Vigour Mania",
			icon: "play",
			path: "/my-trackers"

		},
		{
			title: "Gym Guy's",
			//directc to exercised page
			description: "Visit Vigour Mania's Gym Section",
			icon: "dumbbell",
			path: "/journals"

		},
		{
			title: "Insights",
			//direct to blogs if login
			description: "Share your thoughts with others",
			icon: "lightbulb",
			path: "/journals"
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

		}, {
			title: "Share Your Progress",
			description: "Showcase your progress with others",
			icon: "play"
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
		},
		{
			title: " Nutritional Programs",
			description: "Explore the Nutritional Programs from Research and Experiences "
			, icon: "play"
		},
		{
			title: "Save Your Notes",
			description: "Save your thoughts as notes to get help in future "
			, icon: "play"
		}

	]

	return (
		<>
			<div className={`explore-box bg-${theme}er`}>
				<div className="explore-head">
					<span className={`light-text-${theme} first-span`}>Welcome to&nbsp; </span>
					<h1 className={`dark-text-${theme}`}>Vigour Mania</h1><br />
					<span className={`light-text-${theme} first-span`}>Explore the world of Fitness and Sports</span>
				</div>
				<div className="spotlight" role='spotlight'>
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
				<div className="exp-evolved" role='get-evolved' >
					<Head title="Get Evolved" url='/get-evolved' />
					<div className="evo-area">
						{
							evolve.map((item, index) => {
								return <Evolve index={index} key={index} title={item.title} description={item.description} path={item.path} />
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default Explore
