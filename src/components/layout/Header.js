import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const Header = ({app}) => {
	return (
		<div className="header">
			<Link to="/"><h1>
				{app}
			</h1></Link>

			<h3>
			{/* Welcome to <strong>{app}</strong>. <br /> */}
			{app} is a database of	Freelancers and Creatives in Toronto.
			</h3>
			<p>{app} was created as a resource for the community to find and give opportunities to others. {app} is for the community, by the community.
			</p>

		</div>
	)
}

export default Header
