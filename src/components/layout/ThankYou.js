import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';


const ThankYou = (props) => {


let history = useHistory()
	const goBack = () => {
		history.push('/')
	}

	const cards = ()=> {
			const {profiles} = props;

		const random = profiles[Math.floor(Math.random() * profiles.length)]
		const {name, photo, field, id, live} = random;
		const txt = field.join(", ")

		if (live === true) {
			return (

				<Link to={`/profile/${id}`}>
		<div className="single-card">
			<div className="image">
				<img src={photo} alt={name} />
			</div>
			<div className="single-content">
				<h3>{name}</h3>
				<h4>{txt}</h4>
			</div>
		</div>
		</Link>
			)
		}
	}

	
	if (props ===undefined || props.profiles === undefined) {
	return (
<div className="ui segment">
<div className="ui active centered inline loader"></div>
</div>

)
} else {
	

	return (
		<div className="thank-you">
			<h3>Thank you for your submission! 	</h3>
			<br />
			<h4>Your post will be moderated within 24-48 hours.</h4>
			<h5>In the meantime, stay a while and check out your fellow community members! </h5>

			{cards()}

			<button className="ui button" onClick={() =>goBack()}>Go Back</button>
		<Fragment>
			<strong>What does it mean to be moderated?</strong>
			<p>We moderate submissions to make sure this database is as resourceful as possible.<br/>We don't care about clout, as long as you have something to offer.</p>
		</Fragment>

		</div>
	)
	}
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
)(ThankYou)