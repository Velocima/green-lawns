import React from 'react';
import '../css/contact.css';

export default function Contact() {
	return (
		<main className='contact'>
			<section className='contact-info'>
				<div className='banner'>
					<h1>Get In Touch</h1>
					<h2>We'd Love to Hear from You!</h2>
				</div>
				<p className='opening-paragraph'>
					This paragraph should explain what a customer should expect
					by contacting/ how they can contact. <br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Illum suscipit voluptatem quisquam amet molestias inventore.
				</p>
				<div className='phone-numbers'>
					<p>
						<h2>To book now call</h2>
						Telephone: <span>01600 740111</span> <br />
						Mobile: <span>07815 534990</span>
					</p>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2468.211355908111!2d-2.7741205!3d51.7840232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871c7a3c31bcd37%3A0x2e3a5debcce221b8!2sGreen%20Lawns%20Boarding%20Kennels!5e0!3m2!1sen!2suk!4v1604681217217!5m2!1sen!2suk'
					width='600'
					height='450'
					frameborder='0'
					allowfullscreen=''
					aria-hidden='false'
					tabindex='0'
				></iframe>
				<div className='table-background'></div>
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
				<div className='address'>
					<p>
						<h2>Out Address</h2>
						<br />
						Something? <br />
						Something? <br />
						Monmouth <br /> NP25 4BX
					</p>
				</div>
			</section>
			<section className='review-us'>
				<div className='banner'>
					<h1>Leave Us a Review</h1>
				</div>
				<p>
					Your opinion matters to us. something something write us a
					review.
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum aliquam labore, fugiat qui, veritatis numquam
					voluptates repellat a repudiandae, modi commodi? Nisi amet
					eos magni exercitationem aperiam fuga, debitis magnam.
				</p>
				<div className='review-links'>
					<p>not sure what i'm going to link here yet...</p>
				</div>
			</section>
		</main>
	);
}
