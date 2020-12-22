import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
	return (
			<li><NavLink to="/signin">Sign In</NavLink></li>
	)
}

export default SignedOutLinks;