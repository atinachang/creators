import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const AdminList = ({profiles, props}) => {
	console.log(props)
	console.log(profiles)
	// const {auth} = props;
	return (
		<Fragment>
				<h1>admin list</h1>
				{profiles && profiles.map((profile) => {
					if (profile.live === false) {
						return (
							<div className="column" key={profile.id}>
								<div className="fluid card">
								<Link to={`/profile/${profile.id}`}>
								<h1>{profile.name}</h1>
								{/* <ProfileSummary profile={profile} key={profile.id}  /> */}
								</Link>
								</div>
							</div>
						)
					}
				})}
		</Fragment>
	)
}

export default AdminList
