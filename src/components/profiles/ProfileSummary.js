import React, {Fragment} from 'react';
// import {deleteProfile} from '../../store/actions/profileActions';
// import {connect} from 'react-redux';
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

const ProfileSummary = ({profile, prop}) => {
	// console.log(prop)
	// console.log(profile.name)
	const {name, title, photo, field} = profile;
	// console.log(field.join(", "))

	return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<h2>{name}</h2>
				<h4>{field}</h4>
				{/* <button className="ui button">clear</button>
				<button className="ui button">delete</button> */}

				{/* <p>{title}</p> */}
			</div>
		</Fragment>
	)
}

export default ProfileSummary