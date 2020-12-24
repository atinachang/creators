export const createProfile = (profile) => {
	return (dispatch, getState, { getFirebase, getFirestore}) => {
		// make async call to db
		const firestore = getFirestore();
		// this will add a new document to our firestore
		firestore.collection('profiles').add({
			// this whole document will be added to our collection
			...profile,

		}).then(() => {
			// when the document is added, dispatch this method
			dispatch({
				type: 'CREATE_PROFILE',
				profile,
				//when this action is called, it will add to the db
			})}).catch((err) => {
				dispatch({
					type: 'CREATE_PROFILE_ERROR',
					err
				})
				console.log(err)
			})
		}
	}


export const deleteProfile = (id) => {
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore()

		firestore.delete({collection: 'profiles', doc:(id)})
		.then(() => {
			dispatch({
				type: 'DELETE_PROFILE',
				id
			})
		}).catch((err) => {
				dispatch({type: 'DELETE_PROFILE_ERROR',
			err})
		})
	}

}

export const updateProfile = (profile) => {
	return (dispatch, {getFirestore}) => {
		const firestore = getFirestore()

		// const updates = {
		// 	live: true,
		// 	updatedAt: firestore.FieldValue.serverTimestamp()
		// }

		firestore.update({
			collection: 'profiles',
			doc: profile	
		},
		{live: true}).then(() => {
			dispatch({
				type: 'UPDATE_PROFILE',
				profile
			})
		}).catch((err) => {
				dispatch({type: 'UPDATE_PROFILE_ERROR',
			err})
		})
	}
}