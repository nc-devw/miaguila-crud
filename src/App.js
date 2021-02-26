import { Route } from 'react-router-dom';

/* --- Components --- */
import Login from './components/Login';

function App() {
	return (
		<Route exact path="/login">
			<Login />
		</Route>
	);
}

export default App;
