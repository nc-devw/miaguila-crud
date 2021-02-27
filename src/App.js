import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

/* --- Styled Components --- */
import { Flex } from './styles/globalStyled';

/* --- Actions --- */
import { logout } from './redux/action/users_actions';

/* --- Components --- */
import Home from './components/Home';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Tasks from './components/Tasks';
import TasksEdit from './components/Tasks/edit';
import Modal from './components/Modal';

let interval;

function App() {
	const dispatch = useDispatch();
	const history = useHistory();

	const { user, session } = useSelector((state) => state);

	const [modalOpen, setModalOpen] = useState(false);
	const [seconds, setSeconds] = useState(60 * 5);

	const destroySession = () => {
		dispatch(logout());
		clearInterval(interval);
		setSeconds(60 * 5);
		setModalOpen(false);
		history.push('/login');
	};

	const restartSession = () => {
		setSeconds(60 * 5);
	};

	useEffect(() => {
		if (session) {
			interval = setInterval(() => {
				let timer;
				setSeconds((prev) => {
					timer = prev - 1;
					return timer;
				});
				if (timer <= 60) {
					setModalOpen(true);
				}
				if (timer <= 0) {
					destroySession();
				}
				console.log('timer', timer);
			}, 1000);
		}
	}, [session]);

	return (
		<>
			{modalOpen && (
				<Modal
					setModal={setModalOpen}
					seconds={seconds}
					destroySession={destroySession}
					restartSession={restartSession}
				/>
			)}
			<Switch>
				<Route exact path="/">
					{user.status ? (
						<Redirect to="/inicio" />
					) : (
						<Redirect to="/login" />
					)}
				</Route>
				<Route exact path="/login">
					{user.status ? <Redirect to="/inicio" /> : <Login />}
				</Route>
				{user.status ? (
					<Flex>
						<Sidebar />
						<Flex direction="column" className="flex-1">
							<Navbar />
							<Route exact path="/inicio">
								<Home />
							</Route>
							<Route exact path="/usuarios">
								<Users />
							</Route>
							<Route exact path="/tareas">
								<Tasks />
							</Route>
							<Route exact path="/tareas/editar">
								<TasksEdit />
							</Route>
						</Flex>
					</Flex>
				) : (
					<Redirect to="/login" />
				)}
			</Switch>
		</>
	);
}

export default App;
