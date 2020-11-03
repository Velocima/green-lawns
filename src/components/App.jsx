import React from 'react';
import '../css/app.css';
import { Nav } from './Nav';

const App = () => {
	return (
		<div className='app-container'>
			<header>
				<Nav />
			</header>
		</div>
	);
};

export default App;
