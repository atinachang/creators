import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import {connect} from 'react-redux';
import Toolbar from './Toolbar/Toolbar'
const Nav = (props) => {
		const {auth} = props;

		const links = auth.uid ?  <SignedInLinks /> : null;

	return (
	<Fragment>
		{/* <Toolbar /> */}
		<ul className="ui  menu">
			<li className="header item">
				<NavLink to="/">Home</NavLink>
			</li>

			<li className="item">
				<NavLink to="/create">Submit</NavLink>
			</li>

			<li className="item">
				<NavLink to="/faq">About</NavLink>
			</li>

			{auth.isLoaded && links}

		</ul>

		</Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Nav);