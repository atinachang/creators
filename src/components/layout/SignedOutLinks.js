import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
	return (
			<li className="item"><NavLink to="/signin">Sign In</NavLink></li>
	)
}

export default SignedOutLinks;