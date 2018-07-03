import { database } from '../firebase';

export const FETCH_MESSAGES = 'fetch_messages'

export function getMessages() {
	return dispatch => { //Dispatch function that gets called when firebase has done its thing.		
		database.on('value', data => {
			dispatch({ // Dispatch actual object to reducer
				type: FETCH_MESSAGES,
				payload: data.val(),
			})
		})
	}
}

export function saveMessage(values) {
	return dispatch => database.push(values);
}