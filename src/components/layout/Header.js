import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const Header = ({app}) => {
	return (
		<div className="header">
			<Link to="/"><h1>
				{app}
			</h1></Link>

			<h4>
			Welcome to <strong>{app}</strong>. <br />A database of
			Freelancers and Creatives in Toronto.
			</h4>

		</div>
	)
}

export default Header
