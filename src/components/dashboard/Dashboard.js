import React, { Fragment, Component } from 'react'
import ProfileList from '../profiles/ProfileList';
import AdminList from '../admin/AdminList'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';


class Dashboard extends Component {
	render(){
		// console.log(this.props)
		const {profiles, auth} = this.props;

		const users = auth.uid ? <AdminList profiles={profiles} props={this.props} /> : <ProfileList profiles={profiles} props={this.props}/> 
		// if (auth.uid) return <Redirect to="/admin/list"/>
		return (
			<div className="ui link cards">
				{auth.isLoaded && users}
				{/* <ProfileList profiles={profiles} props={this.props}/> */}
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
)(Dashboard)