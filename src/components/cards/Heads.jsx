import React from 'react'

const Heads = ({heading,id}) => {
	return (
		<div className="head" id={id}>
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