const initState = {
	profiles: [
		{id: '1', name: 'Roshanie', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', name: 'Saba', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', name: 'JMKM', title: 'egg hunt with yoshi', content: 'blah blah blah'}
	]
}

const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROFILE': 
			console.log('created profile', action.profile);
			return state;
		case 'CREATE_PROFILE_ERROR':
			console.log('create profile error', action.err);
			return state;
		default:
			return state;
	}
}