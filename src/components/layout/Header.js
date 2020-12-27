import React, {Fragment} from 'react'

const Header = ({app}) => {
	return (
		<div className="header">
			<h1>{app}</h1>

			<h4>
			Welcome to <strong>{app}</strong>. <br />A database of
			Freelancers and Creatives in Toronto.
			</h4>
			<p>Start by searching below</p>

		</div>
	)
}

export default Header
