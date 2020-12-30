import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

import ProfileSummary from '../../components/profiles/ProfileSummary';

const AdmistList = ({card}) => {

console.log(card)

const {live} = card
console.log(live)
const cards = () => {
		if (live === true) {
	return (
			<div className="column">
				<div className="fluid card">
			<Link to={`/profile/${card.id}`}>
			<ProfileSummary profile={card} key={card.id}  />
			</Link>
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
		// auth: state.firebase.auth
	}
}


export default connect(mapStateToProps)(AdmistList)