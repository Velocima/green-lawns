import React from 'react';
import '../css/app.css';
import { Nav } from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className='app-container'>
				<header>
					<Nav />
				</header>
			</div>
		</Router>
	);
};

export default App;
