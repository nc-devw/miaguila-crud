import {
	GET_USERS,
	LOGIN_USER,
	LOGOUT_USER,
	GET_TASKS,
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	CLEAR_TASKS,
	COMPLETE_TASK,
	INIT_SESSION,
} from './constants';

const initialState = {
	user: JSON.parse(localStorage.getItem('user')) || {},
	tasks: JSON.parse(localStorage.getItem('tasks')) || [],
	users: [],
	session: localStorage.getItem('user') ? true : false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER: {
			const jsonUser = JSON.stringify(action.payload);
			localStorage.setItem('user', jsonUser);
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

		case GET_TASKS: {
			return {
				...state,
				tasks: action.payload,
			};
		}

		case COMPLETE_TASK: {
			return {
				...state,
				tasks: state.tasks.map((task, i) => {
					if (i === action.payload) task.completed = !task.completed;
					return task;
				}),
			};
		}
		case ADD_TASK: {
			return {
				...state,
				tasks: [
					...state.tasks,
					{ title: action.payload, status: false },
				],
			};
		}
		case EDIT_TASK: {
			return {
				...state,
				tasks: state.tasks.map((task, i) => {
					if (i === Number(action.payload.id))
						task.title = action.payload.value;
					return task;
				}),
			};
		}
		case DELETE_TASK: {
			return {
				...state,
				tasks: state.tasks.filter((_, i) => !(i === action.payload)),
			};
		}
		case CLEAR_TASKS: {
			return {
				...state,
				tasks: [],
			};
		}
		case INIT_SESSION: {
			return {
				...state,
				session: true,
			};
		}
		case LOGOUT_USER: {
			localStorage.removeItem('user');
			return {
				...state,
				user: {},
				session: false,
			};
		}
		default:
			return state;
	}
};

export default usersReducer;
