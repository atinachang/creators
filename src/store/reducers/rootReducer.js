// import appReducer from './appReducer';
import profileReducer from './profileReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';


const rootReducer = combineReducers({
	profile: profileReducer,
	firestore: firestoreReducer
})

export default rootReducer