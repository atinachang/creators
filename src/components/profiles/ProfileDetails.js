import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Socials, Bio, Info, Pronoun} from '../layout/Details';
import Remove from '../admin/auth/Remove';
import { validate } from 'uuid';

const ProfileDetails = (props) => {
	const {id} = props.match.params;
	const {profile, auth, history} = props;

const goBack = ()=> {
	history.goBack()
}

if (!props.profile) {
	return (
<div className="ui segment">
<div className="ui active centered inline loader"></div>
</div>

)
}

else  {
		const {instagram, name, photo, email, twitter, website, bio, field, genre, title, pronoun} = props.profile;

		// console.log(props.profile)
		const buttons = auth.uid ? <Remove id={id} profile={profile}/> : <Socials 
instagram={instagram} 
twitter={twitter} 
email={email} 
bio={bio} 
name={name} 
website={website}
title={title}
field={field}
genre={genre}
/>;
		return (
			<Fragment>
			<div className="details-container">
			<h2>{name}</h2>
				<div className="details">
			<div className="details-image">
			<img src={photo} alt={name} />

			</div>

			<div className="bio">
				<Pronoun pronoun={pronoun}/>
				<Bio name={name} bio={bio}/>
					{buttons}

			</div>
						<div className="details-content">
			<Info field={field} title={title} genre={genre}/>
			</div>
			</div>

			<button className="ui button mobile" onClick={() =>goBack()}>Go Back</button>
			</div>
			{/* && breadcrumb? */}
			</Fragment>
		)
	} 
}

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps.match)
	const id = ownProps.match.params.id;
	// console.log(id)
	const profiles = state.firestore.data.profiles;
	console.log(profiles)
	const profile = profiles ? profiles[id] : null;
	console.log(profile)
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