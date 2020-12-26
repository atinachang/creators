import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { deleteProfile, updateProfile } from '../../../store/actions/profileActions';

const Remove = (props) => {
	console.log(props)
	const {profile, id} = props

	 const deletebtn= (profile) => {
		// console.log(props)
		// deleteProfile(profile)
	}

	const updatebtn = () => {
		updateProfile(profile)
		console.log(id, profile)
	}
	return (
		<Fragment>
			{/* <button className="ui button">approve</button> */}
			<button type="button" className="ui button" onSubmit={() =>updatebtn()}>approve</button>
			{/* <button type="button" className="ui button" onClick={() =>deletebtn(profile)}>delete</button> */}
			<button className="ui button">delete</button>

		</Fragment>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteProfile: (profile) => dispatch(deleteProfile(profile)),
		updateProfile: (id) => dispatch(updateProfile(id))
	}
}

// const mapStateToProps = (state, ownProps) => {
// 	// console.log(state)
// 	// console.log(ownProps)
// 	// 	const id = ownProps.match.params.id;
// 	// const profiles = state.firestore.data.profiles;
// 	// const profile = profiles ? profiles[id] : null;

// 		return {
// 		profile,
// 	}
// }

// export default compose(
// 	connect(mapStateToProps, mapDispatchToProps),
// 	firestoreConnect([
// 		{collection: 'profiles'}
// 	])
// )(Remove)
export default connect(null, mapDispatchToProps)(Remove)

// export default Remove