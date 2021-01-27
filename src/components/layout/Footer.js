import React from 'react'
import FooterNav from './FooterNav'

const Footer = ({app}) => {
	return (
		<footer>
			<FooterNav />
			{/* <div className="copy">
			<h4>Create. Connect. Flourish.</h4>
			<h4>For the community, by the community.</h4>
			</div> */}
			<p>
				{app} is a community-driven directory made with love. It is solely run by the developer, AC. This directory is not made possible without the countless efforts of the pioneers before who wanted a place to share talent and resources. 
			</p>
		</footer>
	)
}

export default Footer
