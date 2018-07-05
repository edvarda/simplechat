export const INCREASE_HISTORY = 'increase_history';

export function increaseHistoryLength(value) {
	return {
		type: INCREASE_HISTORY,
		payload: value,
	}
}