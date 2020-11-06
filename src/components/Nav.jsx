import React from 'react';
import '../css/nav.css';
import logo from '../images/green-lawns-logo.png';
import { Link } from 'react-router-dom';

export default function Nav(props) {
	const pages = [
		{ route: '/', navText: 'Home' },
		{ route: '/about', navText: 'About Us' },
		{ route: '/services', navText: 'Services' },
		{ route: '/contact', navText: 'Contact' },
	];
	return (
		<nav>
			<Link to='/'>
				<img src={logo} alt='logo placeholder.' />
			</Link>
			<ul>
				{pages.map((page, i) => (
					<li key={`${i}${page}`}>
						<Link to={page.route}>{page.navText}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
