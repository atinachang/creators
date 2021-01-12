import React, {Fragment} from 'react';

const ProfileSummary = ({profile, prop, data}) => {
	// console.log(profiles)
	const {name, title, photo, field} = profile;
	const txt = field.join(', ')
	const fieldRender = () => {
		console.log(field)
		if (field.length === 1){
			const single = field.map(item =>
				<li className="label" key={item}>{item}</li>
				)
				return (
					<ul className="profile-list">
						{single}
					</ul>
				)
			}
			else {
				const mapped = field.map(item => 
					<li className="label" key={item}>{item} | </li>
					)
					return (
						<ul className="profile-list">
							{mapped}
						</ul>
					)
			}
		}

		return (
		<Fragment>
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="content">
				<p>{name}</p>
				{fieldRender()}
			</div>
		</Fragment>
	)
}

export default ProfileSummary