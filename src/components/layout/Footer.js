import React from 'react'
import FooterNav from './FooterNav'

const Footer = ({app}) => {
	return (
		<footer>
			<FooterNav />
			<p>
				Create. Connect. Repeat. {app} is a community-driven directory for Toronto creatives, made with love. It is solely run by the developer, AC. This directory is not made possible without the countless efforts of the pioneers before who wanted a place to share talent and resources. 
			</p>
		</footer>
	)
}

export default Footer
