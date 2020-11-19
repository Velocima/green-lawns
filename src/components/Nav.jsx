import React, { useState, useEffect } from 'react';
import '../css/nav.css';
import logo from '../images/green-lawns-logo.png';
import { Link } from 'react-router-dom';
import { pages } from '../contentJs/pages';
import useWindowSize from './useWindowSize';

export default function Nav(props) {
	const [width, height] = useWindowSize();
	const [showNav, setShowNav] = useState(width < 1050 ? false : true);

	const handleNavButtonClick = () => {
		if (width < 1050) {
			setShowNav((prevState) => !prevState);
		}
	};
	useEffect(() => {
		setShowNav(width < 1050 ? false : true);
	}, [width]);

	return (
		<nav>
			<div className='overflow-container'>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo placeholder.' />
						<h4>Green Lawns {width > 1050 && <br></br>}Boarding Kennels</h4>
					</Link>
				</div>
			</div>
			<div className='nav-button' onClick={handleNavButtonClick}>
				<div className={`line ${showNav ? '' : 'line-animated'}`}></div>
				<div className={`line ${showNav ? '' : 'middle-line-animated'}`}></div>
				<div className={`line ${showNav ? '' : 'line-animated'}`}></div>
			</div>
			<ul style={{ pointerEvents: width > 1050 && !showNav ? 'none' : 'auto' }}>
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
