import React from 'react'
import {Link} from 'react-router-dom';
import img from '../../assets/logo_transparent.png'

const Header = ({app}) => {
	return (
		<div className="header">
			<Link to="/"><h1>
				{app}
				{/* <img src={img} alt="" srcset=""/> */}
			</h1></Link>
				<div className="copy">
						<h4>Create. Connect. Flourish.</h4>
						<h4>For the community, by the community.</h4>
				</div>


		</div>
	)
}

export default Header
