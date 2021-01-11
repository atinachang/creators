import React, {Fragment} from 'react';

const ProfileSummary = ({profile, prop, data}) => {
	// console.log(profiles)
	const {name, title, photo, field} = profile;
	const txt = field.join(', ')


	return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<p>{name}</p>
			</div>
		</Fragment>
	)
}

export default ProfileSummary