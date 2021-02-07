import React, { Fragment } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {firestoreConnect} from 'react-redux-firebase';


const Dashboard =(props) => {
	const { auth, toRender} = props;

	const sorted = toRender.sort((a,b) => b.createdAt - a.createdAt)

	const mapped = sorted.map((card) => {
			return (
				<ProfileList key={card.id} card={card} props={props} />
			);
		});
	

		const adminmap = sorted.map(card => {
			return (
				<AdminList key={card.id} card={card} />
			)
		})
		const users = auth.uid ? adminmap : mapped;


		return (
			<Fragment>
				<div className="ui link cards">
			{auth.isLoaded && users}
			</div>
			</Fragment>
		)
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
		{ collection: 'profiles'}
	])
)(Dashboard)