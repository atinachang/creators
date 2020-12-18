import React, {Fragment} from 'react';

const ProfileSummary = ({profile}) => {
	// console.log(profile.name)
	const {name, title, photo, field} = profile;
	return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<h1>{name}</h1>
				<h3>{field}</h3>
				<p>{title}</p>
			</div>
		</Fragment>
	)
}

export default ProfileSummary
