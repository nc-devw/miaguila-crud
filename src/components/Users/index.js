import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* --- Utils --- */
import { compareFunction } from '../../utils/functions';

/* --- Styled Components --- */
import { Badge } from '../../styles/globalStyled';
import { UserStyled } from '../../styles/userStyled';

/* --- Actions --- */
import { getUsers } from '../../redux/action/users_actions';

// En el contenido de la página “Usuarios” debes mostrar un listado de 10 usuarios que traigas de https://mocki.io/fake-json-api, los usuarios deben tener: id, nombres, apellidos, teléfono, email y estado (true o false). Además los usuarios deben venir ordenados por id en el Json, pero al momento de representarlos deben ser organizados por nombre, y mostrar los siguientes campos: nombre completo (nombres y apellidos), teléfono, email y estado.

const Users = () => {
	const dispatch = useDispatch();

	const users = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<UserStyled>
			<ul>
				<li className="header">
					<span className="name">Nombre</span>
					<span className="phone bold">Telefono</span>
					<span className="email bold">Email</span>
					<span className="status bold">Estado</span>
				</li>
				{!!users.length ? (
					[...users]
						.sort((a, b) => compareFunction(a.name, b.name))
						.map((user) => (
							<li key={user.id}>
								<div className="name">
									<span className="th">Nombre:</span>
									<span>
										{user.name} {user.lastName}
									</span>
								</div>
								<div className="phone">
									<span className="th">Telefono:</span>
									<span>{user.phone}</span>
								</div>
								<div className="email">
									<span className="th">Email:</span>
									<span>{user.email}</span>
								</div>
								<div className="status">
									<Badge
										minWidth="100px"
										padding="0.5em"
										className={
											user.status ? 'secondary' : 'error'
										}
									>
										{user.status ? 'Activo' : 'Inactivo'}
									</Badge>
								</div>
							</li>
						))
				) : (
					<h2>No hay usuarios existentes</h2>
				)}
			</ul>
		</UserStyled>
	);
};

export default Users;
