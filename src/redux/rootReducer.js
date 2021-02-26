import { LOGIN_USER } from './constants';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || {},
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				user: action.payload,
			};
		}
		default:
			return state;
	}
};

export default usersReducer;
