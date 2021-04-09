import React, {Fragment} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Socials, Bio, Info, Pronoun, Portfolio} from '../layout/Details';
import Remove from '../admin/auth/Remove';

const ProfileDetails = (props) => {
	// console.log(props.profile)
	const {id} = props.match.params;
	const { profile, auth, setSearch } = props;


	const {name, photo,bio,  pronoun, workPhoto1, workPhoto2, workPhoto3} = props.profile;

	const filter = e => {
		setSearch(e.target.dataset.value)
}

	const buttons = auth.uid ? <Remove id={id} profile={profile}/> : <Socials 
		{...props}
			/>;

	return (
		<Fragment>
			<div className="details-container fade-in wrapper">
				<h2>{name}</h2>
					<div className="details-image">
						<img src={photo} alt={name} />
				</div>
				<Pronoun pronoun={pronoun}/>

					{buttons}

				<div className="details">
					<div className={bio || workPhoto1 || workPhoto2 || workPhoto3 ? "details-content": null}>
						<Bio name={name} bio={bio}/>
						<Portfolio  {...props}/>
					</div>
					<div className="details-titles">
						<Info {...props} filter={ filter}/>
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
