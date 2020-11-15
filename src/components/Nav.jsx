import React from 'react';
import '../css/nav.css';
import logo from '../images/green-lawns-logo.png';
import { Link } from 'react-router-dom';
import { pages } from '../contentJs/pages';

export default function Nav(props) {
	return (
		<nav>
			<div className='overflow-container'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo placeholder.' />
					</Link>
					<h4>
						Green Lawns <br></br>Boarding Kennels
					</h4>
				</div>
			</div>
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
