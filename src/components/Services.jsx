import React from 'react';
import '../css/services.css';
import { Link } from 'react-router-dom';
import dog from '../images/good-boy.jpg';
import bullet from '../images/paw-bullet.png';

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
				<table className='multiple-nights'>
					<tr>
						<th colSpan='2'>For Multiple Nights</th>
					</tr>
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
				<table className='one-night'>
					<tr>
						<th colSpan='2'>For One Night</th>
					</tr>
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
			</section>
			<section className='important-information'>
				<h1>Important Information</h1>
				<ul>
					<li>
						<img src={bullet} alt='' />
						<p>
							All dogs are to be vaccinated and up to date. Kennel
							cough vaccine should be given at least two weeks
							prior to entering our kennels. Certificates must be
							brought in on every visit.
						</p>
					</li>
					<li>
						<img src={bullet} alt='' />
						<p>
							All bookings are to be paid in full by cash or
							cheque upon collection.
						</p>
					</li>
					<li>
						<img src={bullet} alt='' />
						<p>
							Another days charge will be added if collection is
							in the afternoon.
						</p>
					</li>
				</ul>
				<table>
					<tr>
						<th colSpan='2'>Opening Hours</th>
					</tr>
					<tr>
						<td>Monday - Friday</td>
						<td>
							9:00am - 11:00am
							<br></br>
							2:00pm - 4:00pm
						</td>
					</tr>
					<tr>
						<td>Saturday - Sunday</td>
						<td>9:00am - 11:00am</td>
					</tr>
				</table>
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
