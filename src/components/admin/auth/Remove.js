import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import { deleteProfile } from '../../../store/actions/profileActions';

const Remove = (props) => {
	console.log(props)

	 function deletebtn() {
		console.log(props)
		// deleteProfile(profile)
	}
	return (
		<Fragment>
			<button className="ui button">approve</button>
			{/* <button type="button" className="ui button" onClick="">approve</button> */}
			<button type="button" className="ui button" onClick={deletebtn()}>delete</button>
			{/* <button className="ui button">delete</button> */}

		</Fragment>
	)
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		deleteProfile: (profile) => dispatch(deleteProfile(profile))
// 	}
// }

// export default connect(null, mapDispatchToProps)(Remove)

export default Remove