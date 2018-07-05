import { INCREASE_HISTORY } from '../actions/roomActions';

const initialState = {
	historySize: 15
};

export default function (state = initialState, action) {
	switch(action.type) {
		case INCREASE_HISTORY:
			return Object.assign({}, state, {
                historySize : action.payload,
            });
		default:
			return state;
	}
}

