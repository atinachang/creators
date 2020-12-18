import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import ProfileSummary from './ProfileSummary';

const ProfileList = ({profiles}) => {
	return (
		<Fragment>
			{
				profiles && profiles.map((profile) => {
					const newId = profile.name.replace(/\s/g, '').toLowerCase()
					return (
							<div className="column">
								<div className="fluid card">
							<Link to={`/${profile.id}`}>
							<ProfileSummary profile={profile} key={profile.id}/>
							</Link>
							</div>
							</div>
					)
				})
			}
		</Fragment>
	)
}

export default ProfileList
