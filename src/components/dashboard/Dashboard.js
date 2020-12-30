import React, { Fragment, Component, useState } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {fields, film} from '../profiles/forms/arrays'
import {Filter, ArrayFilter} from '../layout/filters/Filter'
import {firestoreConnect} from 'react-redux-firebase';


const Dashboard =(props) => {
		const {profiles, auth} = props;
		// console.log(auth)

	const [appFilter, setAppFilter] = useState("All")
	const [expFilter, setExpFilter] = useState("All")

		const filter =(e) => {
	const {value} = e.target
		setAppFilter(value)
		// console.log(appFilter)
	}



	if (profiles === undefined) {
	return (
<div className="ui segment">
<div className="ui active centered inline loader"></div>
</div>

)
}
// console.log(props.profiles)
let profToRender = [];
profiles.forEach((profile) => {
	// console.log(profile)
	if (appFilter === "All") {
		profToRender.push(profile)
	} else{
		if (profile.field.includes(appFilter)) {
			profToRender.push(profile)
			// console.log(profToRender)
		}
	} 
})

		const mapped = profToRender.map((card) =>{
			// console.log(card)
			return (
				<ProfileList key={card.id} card={card} props={props}/>
			)
		});

		const adminmap = profToRender.map(card => {
			return (
				<AdminList key={card.id} card={card} />
			)
		})
		const users = auth.uid ? adminmap : mapped;

		const arrayfilter = () => {
			let expert = []
			if (appFilter === "Film Production") {
				expert.push(<ArrayFilter key={film} filter={filter} array={film}/>)
			}
			return (
				<Fragment>{expert}</Fragment>
			)
		}
		return (
			<Fragment>
				<Filter filter={filter} />
				{/* {arrayfilter()} */}
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