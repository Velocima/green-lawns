import React from 'react';
import '../css/about.css';
import ownerImage from '../images/good-boys-and-owner.jpg';
import dog1 from '../images/dog-placeholder-1.jpg';
import dog2 from '../images/dog-placeholder-2.jpg';
import dog3 from '../images/dog-placeholder-3.jpg';

export const About = () => {
	return (
		<main className='about-container'>
			<section className='family'>
				<div className='family-text'>
					<h1>More than just a business</h1>
					<p>
						This section will contain a paragraph about "family run
						business". Cover who runs it, why they love it etc.
						<br></br>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Debitis unde explicabo veritatis fuga labore
						facere natus nihil, blanditiis consectetur fugiat id
						accusamus nisi hic eligendi? Omnis, exercitationem. Quo,
						aperiam perferendis.
					</p>
				</div>
				<img src={ownerImage} alt='' />
			</section>
			<section className='facilites'>
				<div className='banner'>
					<h1>Our facilites</h1>
				</div>
				<div className='tiles'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, vel! Quaerat temporibus tempore aut sunt,
						consequatur suscipit nihil delectus amet quisquam
						possimus veniam porro perspiciatis similique tempora
						voluptas sit accusamus?
					</p>
					<img src={dog1} alt='' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, vel! Quaerat temporibus tempore aut sunt,
						consequatur suscipit nihil delectus amet quisquam
						possimus veniam porro perspiciatis similique tempora
						voluptas sit accusamus?
					</p>
					<img src={dog2} alt='' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, vel! Quaerat temporibus tempore aut sunt,
						consequatur suscipit nihil delectus amet quisquam
						possimus veniam porro perspiciatis similique tempora
						voluptas sit accusamus?
					</p>
					<img src={dog3} alt='' />
				</div>
			</section>
		</main>
	);
};
