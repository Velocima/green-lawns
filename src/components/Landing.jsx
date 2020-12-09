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
			<div className='description'>
				<div className='text-container'>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nisi fugiat
						quod minus vero quo porro cumque deserunt numquam sit enim id repudiandae
						amet suscipit corrupti, ipsa consectetur. Voluptas, esse?
						<br></br>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta
						illo quae accusamus labore asperiores! Tenetur libero distinctio quam
						similique dolor aut, maiores eum at amet officia nisi consequuntur
						repudiandae?
					</p>
				</div>
				<div className='call-to-action'>
					<Link to='/contact'>Book Now</Link>
				</div>
			</div>
		</main>
	);
}
