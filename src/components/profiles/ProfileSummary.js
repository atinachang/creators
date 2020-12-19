import React, {Fragment} from 'react';

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
				{/* <p>{title}</p> */}
			</div>
		</Fragment>
	)
}

export default ProfileSummary
