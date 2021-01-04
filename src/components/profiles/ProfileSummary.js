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
				<h3>{name}</h3>
				<p>{txt}</p>
			</div>
		</Fragment>
	)
}

export default ProfileSummary