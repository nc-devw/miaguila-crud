import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/* --- Styled Components --- */
import { SidebarStyled, SVGMenu } from '../../styles/sidebarStyled';

/* --- Assets --- */
import logo from '../../assets/logo.png';
import home from '../../assets/icons/home.svg';
import users from '../../assets/icons/users.svg';
import tasks from '../../assets/icons/tasks.svg';
import settings from '../../assets/icons/settings.svg';

const Sidebar = () => {
	return (
		<SidebarStyled>
			<div className="title">
				<div className="title-logo">
					<img src={logo} alt="logo" />
				</div>
				<h2>Mi Águila</h2>
			</div>
			<div className="menu">
				<NavLink to="/inicio">
					<SVGMenu src={home} />
					<span>Inicio</span>
				</NavLink>
				<NavLink to="/usuarios">
					<SVGMenu src={users} />
					<span>Usuarios</span>
				</NavLink>
				<NavLink to="/tareas">
					<SVGMenu src={tasks} />
					<span>Tareas</span>
				</NavLink>
			</div>
			<Link to="/configuracion" className="settings">
				<SVGMenu src={settings} />
				<span>Configuración</span>
			</Link>
		</SidebarStyled>
	);
};

export default Sidebar;
