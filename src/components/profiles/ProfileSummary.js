import React, {Fragment} from 'react';
// import {deleteProfile} from '../../store/actions/profileActions';
// import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

const ProfileSummary = ({profile, prop}) => {
	// console.log(profiles)
	const {name, title, photo, field} = profile;
	const txt = field.join(', ')

	return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<h2>{name}</h2>
				<h4>{txt}</h4>
			</div>
		</Fragment>
	)
}

export default ProfileSummary