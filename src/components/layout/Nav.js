import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import {connect} from 'react-redux';
import img from '../../assets/logo_transparent.png'
const Nav = (props) => {
		const {auth, app, searchSpace} = props;

		const links = auth.uid ?  <SignedInLinks /> : null;

		

	// try to implement search bar into nav
	return (
	<Fragment>
		<div className="nav">
		<div className="ui search">
		<input type="text" className="prompt"  placeholder="Search by Keyword" onChange={(e)=>searchSpace(e)} />
		</div>
			<ul>
				<li >
			<NavLink to="/" className="branding">{app}</NavLink>
			{/* <img src={img} alt="" srcset=""/> */}
			</li>
			
			<li>
			<NavLink to="/create">Contribute</NavLink>
			</li>
			
			{/* <li className="item">
			<NavLink to="/faq">About</NavLink>
			</li> */}
			
			{auth.isLoaded && links}
			</ul>

		</div>
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