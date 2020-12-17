import React, {Fragment} from 'react';

const ProfileSummary = ({profile}) => {
	console.log(profile.name)
	const {name, title} = profile;
	return (
		<Fragment>
			<h3>{name}</h3>
			<span>{title}</span>
		</Fragment>
	)
}

export default ProfileSummary
