import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ProfileSummary from '../../components/profiles/ProfileSummary';

const AdmistList = ({card}) => {

const cards = () => {
		if (card.live === false) {
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