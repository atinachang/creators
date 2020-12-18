import appReducer from './appReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';


const rootReducer = combineReducers({
	profile: appReducer,
	firestore: firestoreReducer
})

export default rootReducer