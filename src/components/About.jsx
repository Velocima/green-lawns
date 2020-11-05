import React from 'react';
import '../css/about.css';
import ownerImage from '../images/good-boys-and-owner.jpg';
import dog1 from '../images/dog-placeholder-1.jpg';
import dog2 from '../images/dog-placeholder-2.jpg';
import dog3 from '../images/dog-placeholder-3.jpg';
import { Link } from 'react-router-dom';

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
			<section className='facilities'>
				<div className='banner'>
					<h1>Our facilities</h1>
				</div>
				<div className='tiles'>
					<p>
						Something about how the kennels are super clean and
						awesome and dog friendly. <br></br>Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Doloribus, vel!
						Quaerat temporibus tempore aut sunt, consequatur
						suscipit nihil delectus amet quisquam possimus veniam
						porro perspiciatis similique tempora voluptas sit
						accusamus?
					</p>
					<img src={dog1} alt='' />
					<img src={dog2} alt='' />
					<p>
						Somthing about how the good boys get walked lots and
						love it because every good boy loves a stroll <br></br>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, vel! Quaerat temporibus tempore aut sunt,
						consequatur suscipit nihil delectus amet quisquam
						possimus veniam porro perspiciatis similique tempora
						voluptas sit accusamus?
					</p>
					<p>
						Something about the micheline starred doggo dinners{' '}
						<br></br>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloribus, vel! Quaerat temporibus tempore aut sunt,
						consequatur suscipit nihil delectus amet quisquam
						possimus veniam porro perspiciatis similique tempora
						voluptas sit accusamus?
					</p>
					<img src={dog3} alt='' />
				</div>
			</section>
			<section className='contact'>
				<p>
					Find out more about our services{' '}
					<Link to='/services'>Here</Link> or get in touch with us{' '}
					<Link to='/contact'>Here</Link>
				</p>
			</section>
		</main>
	);
};
