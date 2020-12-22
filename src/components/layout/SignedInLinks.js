import {NavLink} from 'react-router-dom';
import {signOut} from '../../store/actions/authActions';
import {connect} from 'react-redux';

const SignedInLinks = (props) => {
	return (
			<li><a href="" onClick={props.signOut}>Log Out</a></li>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);