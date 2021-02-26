import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

/* --- Styled Components --- */
import { NavbarStyled, SVGNavbar } from '../../styles/navbarStyled';

/* --- Assets --- */
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import profile from '../../assets/profile.png';

const Navbar = () => {
	const location = useLocation();
	const user = useSelector((state) => state.user);
	const nameRoute = location.pathname.substring(1);
	return (
		<NavbarStyled>
			<h2>{nameRoute}</h2>
			<div className="nav__right">
				<SVGNavbar src={search} className="mr-1" />
				<div className="user">
					<div className="user__notification">
						<SVGNavbar src={notification} />
						<span>0</span>
					</div>
					<div className="user__profile">
						<span>
							{user.name} {user.lastName}
						</span>
						<div className="user__profile-img">
							<img src={profile} alt="pic_profile" />
						</div>
					</div>
				</div>
			</div>
		</NavbarStyled>
	);
};

export default Navbar;
