import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Work from './components/Work/Work';
import Error from './components/Error404/Error';
import Contact from './components/Contact/Contact';
import Stack from './components/Stack/Stack';

function App() {

	return (
		<Router>

			<Switch>
				<Route exact path="/">
					<Home />
					<Stack />
					<Work />
					<Contact />
				</Route>

				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
