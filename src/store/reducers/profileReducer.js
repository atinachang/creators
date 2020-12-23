const initState = {
	auth: null
}

const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROFILE': 
			console.log('created profile', action.profile);
			return state;
		case 'CREATE_PROFILE_ERROR':
			console.log('create profile error', action.err);
			return state;
		case 'DELETE_PROFILE':
			console.log('deleted profile', action.profile);
			return state;
		case 'DELETE_PROFILE_ERROR':
			console.log('error deleting profile', action.err)
		default:
			return state;
	}
}