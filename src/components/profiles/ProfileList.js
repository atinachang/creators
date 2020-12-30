import React, {Fragment, useState} from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fields} from './forms/arrays'
// import { compose } from 'redux';
// import {firestoreConnect} from 'react-redux-firebase';

import ProfileSummary from './ProfileSummary';

const ProfileList = ({profiles, props}) => {


	return (
		<Fragment>

			{
				profiles && profiles.map((profile) => {
					if (profile.live === true) {
					return (
							<div className="column" key={profile.id}>
								<div className="fluid card">
							<Link to={`/profile/${profile.id}`}>
							<ProfileSummary profile={profile} key={profile.id}  />
							</Link>
							</div>
							</div>
					)
					}
				})
			}
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles,
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(ProfileList)