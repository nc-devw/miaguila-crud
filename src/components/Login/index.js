import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initSession, loginUser } from '../../redux/action/users_actions';

/* --- Assets --- */
import spinner from '../../assets/icons/spinner.svg';

/* --- Styled Components --- */
import { Badge, Flex, SVGSpinner } from '../../styles/globalStyled';
import { FormStyled } from '../../styles/loginStyled';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [input, setInput] = useState({
		email: '',
		pass: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		if (!/^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/.test(input.email)) {
			return setError('El email ingresado no es valido');
		}
		if (!/^(?=.*\d)(?=.*[a-z]).*[A-Z]/.test(input.pass)) {
			return setError(
				'La contraseña debe tener al menos un número y una letra mayúscula'
			);
		}
		setLoading(true);
		try {
			await dispatch(loginUser(input));
			dispatch(initSession());
			history.push('/inicio');
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	const handleChange = (ev) => {
		setError('');
		setInput({
			...input,
			[ev.target.name]: ev.target.value,
		});
	};

	return (
		<Flex justify="center" align="center">
			<FormStyled onSubmit={handleSubmit}>
				<h2>Inicio de sesión</h2>
				{error && (
					<Badge margin="1em 0 0 0" className="error">
						{error}
					</Badge>
				)}
				<label>
					<span>Email</span>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					<span>Contraseña</span>
					<input
						minLength="7"
						type="password"
						name="pass"
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit">
					{loading ? <SVGSpinner src={spinner} /> : 'Enviar'}
				</button>
			</FormStyled>
		</Flex>
	);
};

export default Login;
