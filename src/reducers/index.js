import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messageReducer from './messageReducer';
import authReducer from './authReducer';
import roomReducer from './roomReducer';

const rootReducer = combineReducers({
	form: formReducer,
	messages: messageReducer,
	room: roomReducer,
	auth: authReducer,
});

export default rootReducer;