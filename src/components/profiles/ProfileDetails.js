import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Socials, Bio, Info, Pronoun, Portfolio} from '../layout/Details';
import Remove from '../admin/auth/Remove';

const ProfileDetails = (props) => {
	console.log(props.profile)
	const {id} = props.match.params;
	const { profile, auth, setSearch } = props;


	const {instagram, name, photo, email, twitter, website, bio, field, genre, title, pronoun, workPhoto1, workPhoto2, workPhoto3} = props.profile;

	const filter = e => {
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
			<div className="details-container fade-in wrapper">
				<h2>{name}</h2>
				<div className="details">
					<div className="details-image">
						<img src={photo} alt={name} />
						<Pronoun pronoun={pronoun}/>
					</div>
					<div className={bio || workPhoto1 || workPhoto2 || workPhoto3 ? "details-content": null}>
						<Bio name={name} bio={bio}/>
						<Portfolio workPhoto1={workPhoto1} workPhoto2={workPhoto2} workPhoto3={workPhoto3} name={ name}/>
					</div>
					<div className="details-titles">
						<Info field={field} title={title} genre={genre} filter={filter}/>
						{buttons}
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
