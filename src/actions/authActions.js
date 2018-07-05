import { auth, provider } from '../firebase';

export const FETCH_USER = 'fetchUser';

export function login() {
	return dispatch => {
		auth.signInWithPopup(provider)
			.then(result => {})
    		.catch(error => {
      			console.log(error);
    		}
    	);

	};
}

export function logout() {
	return dispatch => {
		auth.signOut()
	};
}

export function fetchUser() {
	return dispatch => {
		auth.onAuthStateChanged(user => {
			if (user) { // If logged in
				dispatch({
        			type: FETCH_USER,
        			payload: user,
      			});
			} else { // If logged out
				dispatch({
					type: FETCH_USER,
					payload: null,
				});
			}
		});
	};
}