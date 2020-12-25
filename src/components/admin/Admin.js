import React, { Fragment, Component } from 'react'
import {connect} from 'react-redux';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';
import SignIn from '../admin/auth/SignIn'
import AdminList from './AdminList'
import ProfileList from '../../components/profiles/ProfileList'


class Admin extends Component {
	render(){
		return (
			<div className="ui link cards">
				<SignIn />
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
)(Admin)