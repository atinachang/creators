import React, {Fragment, useEffect, useState} from 'react'
import {deleteProfile} from '../../store/actions/profileActions';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { Redirect, useHistory } from 'react-router-dom'



export  const Buttons = ({props}) => {
	const [live, setLive] = useState(false)
	// console.log(props)
	const {profile} = props;
	console.log(profile)

	const changeState = (e) => {
		e.preventDefault();
		// if (profile.live != true) {
		// 	setLive(true)
		// }
		console.log(profile.live)

	}

	const deleteBtn = (e) => {
		e.preventDefault();
		console.log(props)
	}
	return (
		<Fragment>
			{/* <button>approve</button> */}
			<button onClick={() => setLive(true)}>approve</button>
			{/* <button onClick={(e) =>deleteBtn(e)}>delete</button> */}
			<button>delete</button>
		</Fragment>
	)
	}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProfile: (id) => {
			// e.preventDefault()
			dispatch(deleteProfile(id))
		}
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

export const ButtonContainer = compose(connect(null, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'profiles' }
	])(Buttons))

export const Socials = ({instagram, twitter, email}) => {
	console.log(instagram, twitter, email)
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
	return (
		<div className="socials">
						<h4>Contact:</h4>

			{igRender()}
			{twitRender()}
			{emailRender()}
		</div>
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
