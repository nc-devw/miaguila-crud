import React from 'react';
import { useSelector } from 'react-redux';

/* --- Assets --- */
import illustration from '../../assets/illustration.png';

/* --- Styled Components --- */
import { HomeStyled } from '../../styles/homeStyled';

const Home = () => {
	const user = useSelector((state) => state.user);
	return (
		<HomeStyled>
			<span className="title">
				Bienvenido <strong>{user.name}</strong>
			</span>
			<img src={illustration} alt="illustration" />
		</HomeStyled>
	);
};

export default Home;
