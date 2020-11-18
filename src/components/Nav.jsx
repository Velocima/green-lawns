import React, { useState } from 'react';
import '../css/nav.css';
import logo from '../images/green-lawns-logo.png';
import { Link } from 'react-router-dom';
import { pages } from '../contentJs/pages';

export default function Nav(props) {
	const [showNav, setShowNav] = useState(false);

	const handleNavButtonClick = () => {
		setShowNav((prevState) => !prevState);
	};

	return (
		<nav>
			<div className='overflow-container'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo placeholder.' />
						<h4>
							Green Lawns <br></br>Boarding Kennels
						</h4>
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
						onClick={handleNavButtonClick}
					>
						<Link to={page.route}>{page.navText}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
