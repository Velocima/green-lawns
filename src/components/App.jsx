import React from 'react';
import '../css/app.css';
import { Nav } from './Nav';
import { Landing } from './Landing';
import { About } from './About';
import { Services } from './Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<header>
				<Nav />
			</header>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/services'>
					<Services />
				</Route>
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
			<footer></footer>
		</Router>
	);
};

export default App;
