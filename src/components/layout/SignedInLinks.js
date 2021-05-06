import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
  return (
    <li className='item'>
      <NavLink to='/' onClick={props.signOut}>
        Log Out
      </NavLink>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
