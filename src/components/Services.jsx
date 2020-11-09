import React from 'react';
import '../css/services.css';
import { Link } from 'react-router-dom';
import dog from '../images/good-boy.jpg';

export default function Services() {
	return (
		<main className='services'>
			<section className='our-services'>
				<div className='image-container'>
					<img
						src={dog}
						alt='Ted is one of the families very happy dogs.'
					/>
				</div>
				<div className='container'>
					<h1>Our Services</h1>
					<p>
						This paragraph will describe the services available.
						should contain practical information for customers.
						<br></br>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque veritatis sequi nam fugiat, dolore aliquam
						laboriosam esse suscipit nostrum quas soluta blanditiis
						est reprehenderit cupiditate libero ducimus repellendus
						dolor placeat!
					</p>
				</div>
			</section>
			<section className='prices'>
				<h1>Prices</h1>
				<div className='tables'>
					<div className='table'>
						<h2>Pricing for multiple nights</h2>
						<table>
							<tr>
								<td>1 Dog</td>
								<td>£14 per night</td>
							</tr>
							<tr>
								<td>2 Dogs (small)</td>
								<td>£20 per night</td>
							</tr>
							<tr>
								<td>2 Dogs (medium/large)</td>
								<td>£22 per night</td>
							</tr>
							<tr>
								<td>3 Dogs (small)</td>
								<td>£26 per night</td>
							</tr>
							<tr>
								<td>3 Dogs (medium/large)</td>
								<td>£28 per night</td>
							</tr>
						</table>
					</div>
					<div className='table'>
						<h2>Pricing for a single night</h2>
						<table>
							<tr>
								<td>1 Dog</td>
								<td>£20</td>
							</tr>
							<tr>
								<td>2 Dogs</td>
								<td>£25</td>
							</tr>
							<tr>
								<td>3 Dogs </td>
								<td>£30</td>
							</tr>
						</table>
					</div>
				</div>
			</section>
			<section className='important-information'>
				<h1>Important Information</h1>
				<article className='information'>
					<p>
						All dogs are to be vaccinated and up to date. Kennel
						cough vaccine should be given at least two weeks prior
						to entering our kennels. Certificates must be brought in
						on every visit.
						<br />
						<br />
						All bookings are to be paid in full by cash or cheque
						upon collection.
						<br />
						<br />
						Another days charge will be added if collection is in
						the afternoon.
					</p>
				</article>
				<article className='opening-hours'>
					<h2>Our Opening Hours</h2>
					<table>
						<tr>
							<td>Monday</td>
							<td>9:00am - 11:00am, 2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td>Tuesday</td>
							<td>9:00am - 11:00am, 2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td>Wednesday</td>
							<td>9:00am - 11:00am, 2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td>Thursday</td>
							<td>9:00am - 11:00am, 2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td>Friday</td>
							<td>9:00am - 11:00am, 2:00pm - 4:00pm</td>
						</tr>
						<tr>
							<td>Saturday</td>
							<td>9:00am - 11:00am</td>
						</tr>
						<tr>
							<td>Sunday</td>
							<td>9:00am - 11:00am</td>
						</tr>
					</table>
				</article>
			</section>
			<section className='links'>
				<Link to='/about'>
					<p>Find out more about us</p>
				</Link>
				<Link to='/contact'>
					<p>Get in touch with us</p>
				</Link>
			</section>
		</main>
	);
}
