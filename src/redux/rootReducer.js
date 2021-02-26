import { GET_USERS, LOGIN_USER } from './constants';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || {},
	users: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER: {
			return {
				...state,
				user: action.payload,
			};
		}
		case GET_USERS: {
			return {
				...state,
				users: action.payload,
			};
		}
		default:
			return state;
	}
};

export default usersReducer;
