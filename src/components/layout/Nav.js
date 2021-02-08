import React, {Fragment, useState} from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import {connect} from 'react-redux';
const Nav = (props) => {

	const [searchVal, setSearchVal] = useState('')
	const {auth, app, setSearch} = props;
	const links = auth.uid ? <SignedInLinks /> : null;

	// try to implement search bar into nav

	  const searchSpace = (e) => {
    let keyword = e.target.value;	
    // console.log(e.target)
			setSearch(keyword)
			setSearchVal(keyword)
		}
		

	const reset = (e) => {
		setSearchVal('')
	}
	return (
	<Fragment>

		<nav>
			<ul>
				<li >
				<NavLink to="/" className="branding">{ app}</NavLink>
			</li>
			
			<li>
			<NavLink to="/create">Contribute</NavLink>
			</li>
			
			{/* <li className="item">
			<NavLink to="/faq">About</NavLink>
			</li> */}
			
			{auth.isLoaded && links}

			</ul>

		</nav>
					<div className="ui search">
				<NavLink to="/" className="branding" onClick={(e)=> reset(e) } >connect. create. repeat</NavLink>
				<NavLink to="/search">
					<input type="text" className="prompt" placeholder="Search by Keyword" value={ searchVal}onChange={(e)=>searchSpace(e)} />
				</NavLink>
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