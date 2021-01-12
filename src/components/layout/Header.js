import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const Header = ({app}) => {
	return (
		<div className="header">
			<Link to="/"><h1>
				{app}
			</h1></Link>


		</div>
	)
}

export default Header
