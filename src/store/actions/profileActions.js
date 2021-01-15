export const createProfile = (profile) => {
	return (dispatch, getState, { getFirebase, getFirestore}) => {
		// make async call to db
		const firestore = getFirestore();
		// this will add a new document to our firestore
		// const newId = profile.name.join("")
		firestore.collection('profiles').doc(profile.userId).set({
			// this whole document will be added to our collection
			...profile,

		}).then(() => {
			// when the document is added, dispatch this method
			dispatch({
				type: 'CREATE_PROFILE',
				// profile,
				// createdAt: new Date()

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


export const deleteProfile = (profile) => {
	return (dispatch, getState, {getFirestore}) => {
		const firestore = getFirestore()

		firestore.collection('profiles').remove({
			...profile
		}).then(() => {
			dispatch({
				type: 'DELETE_PROFILE',
				profile
			})
		}).catch((err) => {
				dispatch({type: 'DELETE_PROFILE_ERROR',
			err})
		})
	}

}

export const updateProfile = (id) => {
	return (dispatch, {getFirestore}) => {
		const firestore = getFirestore()

		firestore.collection('profiles').doc(id).update({
			"live": true
		}).then(() => {
			dispatch({
				type: 'UPDATE_PROFILE',
			})
			console.log('updated')
		}).catch((err) => {
				dispatch({
					type: 'UPDATE_PROFILE_ERROR',
			err
		})
			console.log('error updating')
		})
	}
}