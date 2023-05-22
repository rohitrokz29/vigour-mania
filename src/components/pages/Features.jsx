import React from 'react'
import blogs  from '../../assets/blogs.jpg'
import tutorial from "../../assets/tutorial.jpg";
import diets from "../../assets/diets.jpg"
import advices from "../../assets/advices.jpg"
import tracker from "../../assets/tracker.png"
import notebook from "../../assets/notebook.png"

const Features = () => {

	const cards=[
			{
				"heading":"Routine Journaling Updates",
				"description":"Stay in the loop with Routine Health: Your trusted source for timely updates on health, fitness, and diet. Discover insights from the world's top health journals, tailored for your well-being. Empower yourself with knowledge, one update at a time!",
					"image":blogs
			},
			{
				"heading":"Video tutorial of exercises",
				"description":"Empower your fitness journey with engaging video tutorials, delivering a diverse range of effective exercises. Unleash your potential, embrace the transformation, and redefine your limits through our video tutorials. Elevate your fitness game with well researched exercises! ",
				"image":tutorial
			},
			{
				"heading":"Remarkable Diet Formulas",
				"description":"Unlock Your Potential with Remarkable Diet Formulas: Fuel Your Body, Ignite Your Energy, Achieve Your Goals. Embrace the Extraordinary Journey to a Healthier You, Guided by Science and Supported by Results. Experience the Remarkable Difference and Transform Your Life Today!" ,
				"image":diets
			},
			{
				"heading":"	Receive top-notch health recommendations",
				"description":"Elevate your well-being with premier health recommendations. Unlock your potential, embrace vitality, and thrive with our top-notch guidance. Your journey to optimal health starts here, with us by your side.",
				"image":advices
			},
			{
				"heading":"Aim high, track onward",
				"description":"Reach for the summit of wellness with unwavering determination. Track your progress, surpass your goals, and embark on a transformative health journey. Aim high, embrace resilience, and conquer your aspirations.",
				"image":tracker
			},
			{
				"heading":"	Build personalized notebooks",
				"description":"Craft custom wellness journals: Empower your health journey with personalized notebooks. Track your progress, set goals, and document your achievements. Build a tangible reflection of your dedication to a healthier, happier life.",
				"image":notebook
			}

		]


	return (
		<>
		<div className="head">
			<div className="dash">
				<div className="dots">
					<div className="dot"></div>
					<div className="dot"></div>	
				</div>		
				<div className="line"></div>
				<div className="dots">
					<div className="dot"></div>
					<div className="dot"></div>	
				</div>		
			</div>
			<h2 className="heading">Features</h2>
		</div>

		<div className="box">
			{cards.map((ele,index)=>{
					return (
						<div  key={index} className={`box-${index%2}`} >
							<div className="image">
								<img className={`image-${index%2} img-0`} src={ele.image} alt="image"/>
							</div>
							<div className={`info info-${index%2}`}>
								<h2>{ele.heading}</h2>
								<p>{ele.description}</p>
							</div>	
						</div>
				)
			})}
		</div>

		</>
	)
}

export default Features