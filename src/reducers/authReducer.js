import { FETCH_USER } from '../actions/authActions';

const initialState = {
	loggedIn: false,
	displayName: "",
	photoURL: "",
	uid: "",
}

export default function (state = {}, action) {
	switch(action.type) {
		case FETCH_USER:
			if (action.payload) {
				const state = {
					...initialState,
					loggedIn: true,
					displayName: action.payload.displayName,
					photoURL: action.payload.photoURL,
					uid: action.payload.uid,

				};
				console.log(state);
				return(state);
			} else {
				const state = {...initialState};
				console.log(state);
				return(state);
			}
		default:
			return state;
	}
}