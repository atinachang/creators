import React, { Fragment, Component } from 'react'
import ProfileList from '../profiles/ProfileList';
import {connect} from 'react-redux';
import { compose } from 'redux';
// import firestoreconnect after connecting reducer
import {firestoreConnect} from 'react-redux-firebase';


class Dashboard extends Component {
	render(){
		const {profiles} = this.props;
		return (
			<div className="ui link cards">
				<ProfileList profiles={profiles}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profiles: state.firestore.ordered.profiles
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'profiles' }
	])
)(Dashboard)