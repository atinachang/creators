import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Socials, Bio, Info, Pronoun} from '../layout/Details';
import Remove from '../admin/auth/Remove';

const ProfileDetails = (props) => {
	const {id} = props.match.params;
	const { profile, auth, history, setSearch } = props;
const goBack = ()=> {
	history.goBack()
}

	const {instagram, name, photo, email, twitter, website, bio, field, genre, title, pronoun} = props.profile;

	const filter = e => {
		goBack()
		setSearch(e.target.dataset.value)

	}

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
			<div className="details-container fade-in">
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
				<Info field={field} title={title} genre={genre} filter={filter}/>
				</div>
			</div>

			</div>
			</Fragment>
		)
	} 


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const profiles = state.firestore.data.profiles;
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
