import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const AdminDetails = () => {
	return (
		<div>
			<h1>admin details</h1>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps)
	const id = ownProps.match.params.id;
	const profiles = state.firestore.data.profiles;
// 	console.log(state)
// console.log(ownProps)
	// only return IF we have projects in the collection
	const profile = profiles ? profiles[id] : null;
	return {
		profile,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'profiles'}
	])
)(AdminDetails)
