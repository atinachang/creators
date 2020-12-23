import React, {Fragment} from 'react'
export const Buttons = () => {
	return (
		<Fragment>
			<button>approve</button>
			<button>delete</button>
		</Fragment>
	)
}

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
