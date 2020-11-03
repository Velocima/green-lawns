import React from 'react';
import '../css/app.css';
import { Nav } from './Nav';
import { Landing } from './Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<header>
				<Nav />
			</header>
			<Switch>
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
