import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

/* --- Styled Components --- */
import { Flex } from './styles/globalStyled';

/* --- Components --- */
import Home from './components/Home';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Users from './components/Users';

function App() {
	const user = useSelector((state) => state.user);
	return (
		<Switch>
			<Route exact path="/login">
				<Login />
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
					</Flex>
				</Flex>
			) : (
				<Redirect to="/login" />
			)}
		</Switch>
	);
}

export default App;
