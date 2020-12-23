import React, { Fragment, Component } from 'react'
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';
import AdminList from './AdminList'
import ProfileList from '../../components/profiles/ProfileList'


class Admin extends Component {
	render(){
		// console.log(this.props)
		// const {profiles} = this.props;
		// console.log(profiles)
		return (
			<div className="ui link cards">
				<AdminList />
				{/* <ProfileList profiles={profiles} props={this.props}/> */}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log(state)
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