import { FETCH_MESSAGES, INCREASE_HISTORY } from '../actions/messageActions';

const initialState = {
	historySize: 15
};

export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_MESSAGES:
			return action.payload;
		default:
			return state;
	}
}

