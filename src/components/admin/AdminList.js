import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

import ProfileSummary from '../../components/profiles/ProfileSummary';

const AdmistList = ({profiles}) => {


// const {auth} = props;
	return (
		<Fragment>
			{
				profiles && profiles.map((profile) => {
					// console.log(profile.live)
					// const newId = profile.name.replace(/\s/g, '').toLowerCase()
					if (profile.live === false) {
					return (
							<div className="column" key={profile.id}>
								<div className="fluid card">
							<Link to={`/profile/${profile.id}`}>
							<ProfileSummary profile={profile} key={profile.id}  />
							</Link>
							</div>
							</div>
					)
					}
				})
			}
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