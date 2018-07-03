import { FETCH_MESSAGES } from '../actions/messageActions';

export default function (state = {}, action) {
	switch(action.type) {
		case FETCH_MESSAGES:
			return action.payload; 
		default:
			return state;
	}
}

