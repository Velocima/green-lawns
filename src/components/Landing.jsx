import React from 'react';
import '../css/landing.css';
import { Review } from './Review';
import { reviews } from '../contentJs/Reviews';

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
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Odit nisi fugiat quod minus vero quo porro cumque deserunt
					numquam sit enim id repudiandae amet suscipit corrupti, ipsa
					consectetur. Voluptas, esse?
					<br></br>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dignissimos soluta illo quae accusamus labore asperiores!
					Tenetur libero distinctio quam similique dolor aut, maiores
					eum at amet officia nisi consequuntur repudiandae?
				</p>
			</div>
			<section className='reviews'>
				<div className='reviews-banner'>
					<h2>First rate customer service</h2>
				</div>
				<div className='reviews-container'>
					{reviews.map((review, i) => (
						<Review
							review={review.review}
							author={review.author}
							key={`${i}${review.author}`}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
