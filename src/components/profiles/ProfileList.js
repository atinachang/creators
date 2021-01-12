import React, {Fragment, useState} from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fields} from './forms/arrays'

import ProfileSummary from './ProfileSummary';

const ProfileList = ({card, props, tagFilter, profiles, data}) => {
	const {field} = card
	const fieldRender = () => {
const mapped = field.map(item => 
		<li className="label" key={item} onClick={tagFilter}>{item}</li>
)
			return (
			<ul>
				{mapped}
			</ul> )
	}
const cards = () => {
		if (card.live === true) {
	return (
			<div className="column">
				<div className="fluid card">
			<Link to={`/profile/${card.id}`}>
			<ProfileSummary profile={card} key={card.id}  />
			</Link>
			{/* {fieldRender()} */}
			</div>
			</div>
	)
	}
}
	return (
		<Fragment>
			{cards()}
		</Fragment>
	)
}


const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles,
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(ProfileList)