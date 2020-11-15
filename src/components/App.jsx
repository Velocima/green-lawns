import React from 'react';
import '../css/app.css';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<ScrollToTop />
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
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Landing />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
