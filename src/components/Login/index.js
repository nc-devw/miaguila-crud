import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/action/users_actions';

/* --- Assets --- */
import spinner from '../../assets/icons/spinner.svg';

/* --- Styled Components --- */
import {
	Badge,
	ContainerFullView,
	SVGSpinner,
} from '../../styles/globalStyled';
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
			setError('El email ingresado no es valido');
		}
		if (!/^(?=.*\d)(?=.*[a-z]).*[A-Z]/.test(input.pass)) {
			setError(
				'La contraseña debe tener al menos un número y una letra mayúscula'
			);
		}
		setLoading(true);
		try {
			await dispatch(loginUser(input));
			history.push('/');
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
		<ContainerFullView justify="center" align="center">
			<FormStyled onSubmit={handleSubmit}>
				<h2>Inicio de sesión</h2>
				{error && <Badge className="error">{error}</Badge>}
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
		</ContainerFullView>
	);
};

export default Login;
