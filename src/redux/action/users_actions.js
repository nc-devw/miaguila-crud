import axios from 'axios';
import {
	GET_USERS,
	LOGIN_USER,
	GET_TASKS,
	ADD_TASK,
	EDIT_TASK,
	DELETE_TASK,
	CLEAR_TASKS,
	COMPLETE_TASK,
} from '../constants';

export const loginUser = (payload) => {
	return function (dispatch) {
		return axios
			.post('https://api.mocki.io/v1/889db743', payload)
			.then((user) => {
				dispatch({
					type: LOGIN_USER,
					payload: user.data,
				});
				return user;
			})
			.catch((err) => {
				throw new Error(
					'Ocurrio un error al intentar iniciar sesión. Por favor vuelva a intentarlo mas tarde'
				);
			});
	};
};

export const getUsers = () => {
	return function (dispatch) {
		return axios
			.get('https://api.mocki.io/v1/ba348bfb')
			.then((users) => {
				dispatch({
					type: GET_USERS,
					payload: users.data,
				});
				return users;
			})
			.catch((err) => {
				throw new Error(
					'Ocurrio un error al intentar traer los usuarios. Por favor vuelva a intentarlo mas tarde'
				);
			});
	};
};

export const getTasks = () => {
	return function (dispatch) {
		return axios
			.get('https://api.mocki.io/v1/9f376cea')
			.then((tasks) => {
				dispatch({
					type: GET_TASKS,
					payload: tasks.data,
				});
				return tasks;
			})
			.catch((err) => {
				throw new Error(
					'Ocurrio un error al intentar traer las tareas de este usuario. Por favor vuelva a intentarlo mas tarde'
				);
			});
	};
};

export const completeTask = (payload) => {
	return {
		type: COMPLETE_TASK,
		payload,
	};
};
export const addTask = (payload) => {
	return {
		type: ADD_TASK,
		payload,
	};
};

export const editTask = (payload) => {
	return {
		type: EDIT_TASK,
		payload,
	};
};

export const deleteTask = (payload) => {
	return {
		type: DELETE_TASK,
		payload,
	};
};

export const clearTasks = () => {
	return {
		type: CLEAR_TASKS,
	};
};
