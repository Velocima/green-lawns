import React from 'react';
import '../css/landing.css';
import { Review } from './Review';
import { reviews } from '../contentJs/Reviews';

export const Landing = () => {
	return (
		<main className='landing-container'>
			<div className='banner'>
				<h1>Green Lawns Boarding Kennels</h1>
				<h2>Your dogs' home away from home</h2>
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
				{reviews.map((review, i) => (
					<Review
						review={review.review}
						author={review.author}
						key={`${i}${review.author}`}
					/>
				))}
			</section>
		</main>
	);
};
