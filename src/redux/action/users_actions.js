import axios from 'axios';
import { GET_USERS, LOGIN_USER } from '../constants';

export const loginUser = (payload) => {
	return function (dispatch) {
		return axios
			.post('https://api.mocki.io/v1/667e0870', payload)
			.then((user) => {
				const jsonUser = JSON.stringify(user.data);
				localStorage.setItem('user', jsonUser);
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
