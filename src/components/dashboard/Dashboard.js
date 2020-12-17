import React, { Fragment, Component } from 'react'
import {connect} from 'react-redux';
import ProfileList from '../profiles/ProfileList';

class Dashboard extends Component {
	render(){
		console.log('Dashboard',this.props)
		const {profiles} = this.props;
		return (
			<Fragment>
				<ProfileList profiles={profiles}/>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profiles: state.profile.profiles
	}
}

export default connect(mapStateToProps)(Dashboard)