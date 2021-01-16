import React, {Fragment} from 'react'

const Faq = ({app}) => {
	return (
		<Fragment>
			{/* <h4>{app} is for the community, by the community. </h4> */}
			<div className="ui inverted segment">
				<h4>Wecreate.to is a community-driven directory made with love. It is solely run by the developer, AC. This directory is not made possible without the countless efforts of the pioneers before who wanted a place to share talent and resources.</h4>
			</div>
			<div className="about">
				<div className="ui inverted segment">
			<h4>Why make this database?</h4>
			</div>
			<p>As a creative  community, we are constantly asking each other, "Do you know a _______ who can do _______?" </p>
			<p>{app} is designed to help you with that.</p>
			<p></p>
			</div>
			<div className="about">
				<div className="ui inverted segment">
				<h4>Who is this for?</h4>
				</div>
				<p>{app} is for everyone. Whether you are a creative or someone looking to hire. </p>
				<p></p>
			</div>
			<div className="about">
				<div className="ui inverted segment">
				</div>
				<p>{app} would not exist without community leaders who previously created similar spaces where people can be seen and recognized for their work
				{/* , such as this directory <a href="https://docs.google.com/spreadsheets/d/1V3-cP1aXDjyMcpnke0gB92SXcxkbBrVhKo8LxJum62c/edit?usp=sharing">here</a>  */}
				</p>
				<p>It's important to note that a job cannot be guaranteed from this platform. Rather, it provides opportunities to povide work to others in areas of need.</p>
			</div>

		</Fragment>
	)
}

export default Faq
