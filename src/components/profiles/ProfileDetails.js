import React, {Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Buttons, ButtonContainer, Socials} from '../admin/Buttons';

const ProfileDetails = (props) => {
	// console.log(props)
	// console.log(profiles)
	const {profile, auth, history} = props;
	const {instagram, name, photo, email, twitter, website, bio} = props.profile;
// 	// console.log(props.profile)
// console.log(ButtonContainer)

const buttons = auth.uid ? <Buttons props={props}/> : <Socials instagram={instagram} twitter={twitter} email={email} bio={bio} name={name}/>;

// if (auth.uid)return <Redirect to="/admin/list"/>

const goBack = ()=> {
	history.push('/')
}

if (profile) {
		return (
			<Fragment>
			<h1>{name}</h1>
				<div className="details">
			<div className="image">
			<img src={photo} alt={name} />
			</div>


			<div className="details-content">

			{buttons}
			</div>
			</div>
			<button className="ui button" onClick={() =>goBack()}>Go Back</button>
			</Fragment>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading ...</p>
			</div>
			)
		}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const profiles = state.firestore.data.profiles;
	// console.log(state)
// console.log(ownProps)
	// only return IF we have projects in the collection
	const profile = profiles ? profiles[id] : null;
	return {
		profile,
		auth: state.firebase.auth,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'profiles'}
	])
)(ProfileDetails)