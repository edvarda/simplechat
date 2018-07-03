import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
	form: formReducer,
	messages: messageReducer,
});

export default rootReducer;