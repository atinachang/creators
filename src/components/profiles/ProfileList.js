import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
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
	return (
		<Fragment>
			{
				profiles && profiles.map((profile) => {
					// console.log(profile)
					// const newId = profile.name.replace(/\s/g, '').toLowerCase()
					return (
							<div className="column" key={profile.id}>
								<div className="fluid card">
							<Link to={`/profile/${profile.id}`}>
							<ProfileSummary profile={profile} key={profile.id}  />
							</Link>
							</div>
							</div>
					)
				})
			}
		</Fragment>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		profiles: state.firestore.ordered.profiles
// 	}
// }

// export default compose(
// 	connect(mapStateToProps),
// 	firestoreConnect([
// 		{collection: 'profiles'}
// 	])
// )(ProfileList)

export default ProfileList