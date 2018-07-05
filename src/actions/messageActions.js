import { database } from '../firebase';

export const FETCH_MESSAGES = 'fetch_messages';

export function getMessages(value) {
	return dispatch => { //Dispatch function that gets called when firebase has done its thing.		
		database.limitToLast(value).on('value', data => {
			dispatch({ // Dispatch actual object to reducer
				type: FETCH_MESSAGES,
				payload: data.val(),
			})
		})
	}
}

export function saveMessage(values) {
	return dispatch => database.push({...values, timestamp: new Date().toTimeString().substring(0,5)});
}