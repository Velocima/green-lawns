import React, { useState } from 'react';
import '../css/nav.css';
import logo from '../images/green-lawns-logo.png';
import { Link } from 'react-router-dom';
import { pages } from '../contentJs/pages';

export default function Nav(props) {
	const [showNav, setShowNav] = useState(window.innerWidth < 1000 ? false : true);

	const handleNavButtonClick = () => {
		if (window.innerWidth < 1000) {
			setShowNav((prevState) => !prevState);
		}
	};

	return (
		<nav>
			<div className='overflow-container'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo placeholder.' />
						<h4>Green Lawns {window.innerWidth > 1000 && <br></br>}Boarding Kennels</h4>
					</Link>
				</div>
			</div>
			<div className='nav-button' onClick={handleNavButtonClick}>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>
			<ul>
				{pages.map((page, i) => (
					<li
						key={`${i}${page}`}
						style={{ transform: `translateX(${showNav ? '0' : '100%'})` }}
					>
						<Link to={page.route} onClick={handleNavButtonClick}>
							{page.navText}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
