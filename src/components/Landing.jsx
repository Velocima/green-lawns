import React from 'react';
import '../css/landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<main className='landing-container'>
			<div className='title-banner'>
				<div className='titles'>
					<h1>Green Lawns Boarding Kennels</h1>
					<h2>Your dog's home away from home</h2>
				</div>
			</div>
			<div className='call-to-action'>
				<Link to='/contact'>Book Now</Link>
			</div>
		</main>
	);
}
