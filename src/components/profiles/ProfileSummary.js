import React, {Fragment} from 'react';
// import {deleteProfile} from '../../store/actions/profileActions';
// import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

const ProfileSummary = ({profile, prop}) => {
	// console.log(profile)
	// console.log(profile.name)
	const {name, title, photo, field} = profile;
	// console.log(profile)
	// const txt = field.join(', ')
	// console.log(txt)

	return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<h2>{name}</h2>
				<h4>{field}</h4>
			</div>
		</Fragment>
	)
}

export default ProfileSummary