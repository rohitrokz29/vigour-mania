import React from 'react'

const Heads = ({heading}) => {
	return (
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
			<h2 className="heading">{heading}</h2>
		</div>
	)
}

export default Heads