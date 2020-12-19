import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProfileDetails = (props) => {
	// console.log(props)
	// console.log(profiles)
	const {profile} = props;
	const {instagram, name, photo, email, twitter} = props.profile;
	console.log(props.profile)

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

if (profile) {
		return (
			<Fragment>
			<h1>{name}</h1>
				<div className="details">
			<div className="image">
			<img src={photo} alt={name} />
			</div>
			<div className="content">
			<div className="socials">
			<h4>Contact:</h4>
			{igRender()}
			{emailRender()}
			{twitRender()}
			</div>
			</div>
			</div>
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
// 	console.log(state)
// console.log(ownProps)
	// only return IF we have projects in the collection
	const profile = profiles ? profiles[id] : null;
	return {
		profile,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'profiles'}
	])
)(ProfileDetails)