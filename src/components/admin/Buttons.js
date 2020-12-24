import React, {Fragment, useEffect, useState} from 'react'
import {updateProfile, deleteProfile} from '../../store/actions/profileActions';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose, bindActionCreators } from 'redux'
import { Redirect, useHistory } from 'react-router-dom'



export  const Buttons = (state) => {

	// console.log(state)
	// const {profile} = props;
	// console.log(profilse)
	// const {live} = props.profile;
	// console.log(live)
	// const {id} = props.match.params


	const updateState = () => {
		// updateProfile(profile)
		// console.log(profile)
	}

	const deleteBtn = (e) => {
		e.preventDefault();
		// deleteProfile(id)
		// console.log(profile)
	}
	return (
		<Fragment>
			{/* <button>approve</button> */}
			<button type="button"onClick={() =>updateState()}>approve</button>
			<button type="button"onClick={(e) =>deleteBtn(e)}>delete</button>
			{/* <button>delete</button> */}
		</Fragment>
	)
	}

const mapStateToProps = (state, ownProps) => {
	// console.log(ownProps)
	// console.log(state)
	return {
		profiles: state.firestore.ordered.profiles,
	}
}
const mapDispatchToProps = (dispatch) => {
	// console.log(dispatch)
	return {
		dispatchDeleteProfile: deleteProfile,
		dispatchUpdateProfile: updateProfile
	}
}

// const mapStateToProps = (state, ownProps) => {
// 	const id = ownProps.match.params.id;
// 	const profiles = state.firestore.data.profiles;
// 	// console.log(state)
// // console.log(ownProps)
// 	// only return IF we have projects in the collection
// 	const profile = profiles ? profiles[id] : null;
// 	return {
// 		profile,
// 		auth: state.firebase.auth,
// 	}
// }

export const ButtonContainer = compose(
	connect(
		mapStateToProps, mapDispatchToProps),
		firestoreConnect([
			{collection: 'profiles'}
		]))(Buttons)

export const Socials = ({instagram, twitter, email, bio, name}) => {
	// console.log(instagram, twitter, email)
// const {profile, auth} = props;
// 	const {instagram, name, photo, email, twitter} = props.profile;
	// console.log(props.profile)

	const igRender= () =>{
		if (!instagram) {
		return null
	}
	return (
		<a href={instagram}>
		<i className={`instagram icon`}></i>
		</a>
	)
}

const emailRender = () =>{
if (!email ) {
		return null
	}
	return (
				<a href={`mailto: ${email}`}>
		<i className={`paper plane icon`}></i>
		</a>
	)
}

const twitRender = () =>{
	if (!twitter) {
		return null
	}
	return (
		<a href={twitter}>
		<i className={`twitter icon`}></i>
		</a>
	)
}

const bioRender = () => {
	if (!bio) {
		return null
	}
	return (
		<div className="bio">
			<h3>About {name}</h3>
			<p>{bio}</p>
		</div>
	)
}
	return (
		<Fragment>
			{bioRender()}
			<div className="socials">
		<h4>Contact:</h4>
		
		{igRender()}
		{twitRender()}
		{emailRender()}
		</div>
		</Fragment>
	)
}


// const mapStateToProps = (state, ownProps) => {
// 	const id = ownProps.match.params.id;
// 	const profiles = state.firestore.data.profiles;
// 	const profile = profiles ? profiles[id] : null;
// 	return {
// 		profile,
// 		auth: state.firebase.auth

// 	}
// }

// export default compose(
// 	connect(mapStateToProps),
// 	firestoreConnect([
// 		{collection: 'profiles'}
// 	])
// )(ProfileDetails)
