import React, { Fragment, Component, useState } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {fields} from '../profiles/forms/arrays'
import {firestoreConnect} from 'react-redux-firebase';

const Dashboard =(props) => {
		const {profiles, auth} = props;
		const users = auth.uid ? <AdminList profiles={profiles} props={props} /> : <ProfileList profiles={profiles} props={props}/> 

			const [appFilter, setAppFilter] = useState("All")
		const filter =(e) => {
	const {value} = e.target
		setAppFilter(value)
	}

const options = fields.map(field => {
	return (
		<option key={field} value={field}>{field}</option>
	)
})


// let appsToRender = [];
// profiles.forEach((profile) => {
// 	if (appFilter === "All") {
// 		appsToRender.push(profile)
// 	} else {
// 		if (profile.field.includes(appFilter)) {
// 			appsToRender.push(profile)
// 		}
// 	}
// })
		return (
			<Fragment>
				{/* <div className="filter">
				<select name="filter" id="filter" >
					<option value="All" disabled >Filter by Category</option>
					{options}
				</select>
			</div> */}
				<div className="ui link cards">
			{auth.isLoaded && users}
			</div>
			</Fragment>
		)
	}

const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'profiles' }
	])
)(Dashboard)