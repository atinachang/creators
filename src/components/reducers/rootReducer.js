import appReducer from './appReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	profile: appReducer
})

export default rootReducer