import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

import ProfileSummary from './ProfileSummary';

const ProfileList = ({profiles, props}) => {
	// console.log(props.profiles)
	// console.log(profiles)
	// console.log(props.profiles)
	// console.log(profiles)
	// const profileArr = profiles
	// console.log(profileArr)
	// const prop = props.profiles

const {auth} = props;
// console.log(auth)
// if (auth.uid)return <Redirect to ="/admin" />
	return (
		<Fragment>
			{
				profiles && profiles.map((profile) => {
					// console.log(profile.live)
					// const newId = profile.name.replace(/\s/g, '').toLowerCase()
					if (profile.live === true) {
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
		auth: state.firebase.auth
	}
}

// export default compose(
// 	connect(mapStateToProps),
// 	firestoreConnect([
// 		{collection: 'profiles'}
// 	])
// )(ProfileList)

export default connect(mapStateToProps)(ProfileList)