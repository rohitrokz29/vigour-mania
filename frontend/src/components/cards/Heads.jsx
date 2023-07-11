import PropTypes from 'prop-types'
import { useThemeContext } from '../hooks/useThemeContext';
//heading coponent
const Heads = ({ heading, id }) => {
	const { theme } = useThemeContext();
	return (
		<div className="head" id={id} >
			<div className="dash ">
				<div className="dots">
					<div className={`dot dot-${theme}`}></div>
					<div className={`dot dot-${theme}`}></div>
				</div>
				<div className={`line dot-${theme}`}></div>
				<div className="dots ">
					<div className={`dot dot-${theme}`}></div>
					<div className={`dot dot-${theme}`}></div>
				</div>
			</div>
			<h2 className={`heading heading-${theme}`}>{heading}</h2>
		</div>
	)
}
Heads.propTypes = {
	heading: PropTypes.string,
	id: PropTypes.string
}

export default Heads