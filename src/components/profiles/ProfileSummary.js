import React, {Fragment} from 'react';

const ProfileSummary = ({profile}) => {
	const {name, photo, field} = profile;
	const fieldRender = () => {
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
			const slice = 	field.slice(0, -1).join(' | ') + ' | ' + field.slice(-1);
			const newArr = slice.split()
				const mapped = newArr.map(item => 
					<li className="label" key={item}>{item}</li>
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