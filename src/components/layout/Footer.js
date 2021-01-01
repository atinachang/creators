import React, { Fragment } from 'react'
import FooterNav from './FooterNav'

const Footer = ({app}) => {
	return (
		<div className="footer">
			<FooterNav />
			<p>
				{app} is a community-driven directory made with love. It is solely run by the developer, AC. This directory is not made possible without the countless efforts of the pioneers before who wanted a place to share talent and resources. 
			</p>
								{/* <button className="medium ui inverted secondary button">
						<a href="https://forms.gle/Fxs8qfVFaaaTkSjz9">Report a Bug</a>
					</button>
					<button className="medium ui inverted secondary button">
						<a href="https://forms.gle/cxwnukT9gLJ4jmwp8">
							Make a Suggestion
						</a>
					</button> */}

		</div>
	)
}

export default Footer
