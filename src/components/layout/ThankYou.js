import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'

const ThankYou = () => {
let history = useHistory()
	const goBack = () => {
		history.push('/')
	}
	return (
		<Fragment>
			<h2>Thank you for your submission! 	</h2>
			<br />
			<h3>Your post will be moderated within 24-48 hours.</h3>
			<h4>In the meantime, stay a while and check out your fellow community members! </h4>
			<button className="ui button" onClick={() =>goBack()}>Go Back</button>

		</Fragment>
	)
}

export default ThankYou
