import React from 'react';
import '../css/about.css';
import ownerImage from '../images/good-boys-and-owner.jpg';
import dog1 from '../images/dog-placeholder-1.jpg';
import dog2 from '../images/dog-placeholder-2.jpg';
import dog3 from '../images/dog-placeholder-3.jpg';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<main className='about-container'>
			<section className='family'>
				<div className='image-container'>
					<img src={ownerImage} alt='' />
				</div>
				<div className='family-text'>
					<h1>
						More than just <br /> a business
					</h1>
					<p>
						We are a highly reputable and established boarding
						kennels offering first class care for our guests. We are
						situated just outside Monmouth within easy reach of the
						M4 and A449. Our Kennels are fully licensed by
						Monmouthshire County Council and Insured by Pet Plan UK
						Ltd. We pride ourselves in treating each guest as an
						individual and we care with our kindness and attention
						to detail. We exercise our doggies three times a day in
						our beautiful enclosed paddocks where they can socialise
						with others or, if you prefer can be exercised
						individually. We specialise in anxious or nervous dogs,
						giving them the extra time to either make friends with
						others or to be relaxed just with us.
					</p>
				</div>
			</section>
			<section className='facilities'>
				<div className='banner'>
					<h1>Our facilities</h1>
				</div>
				<div className='tiles'>
					<p className='tile-1'>
						Our Kennels are arranged in two blocks with ten kennels
						in each. They are all heated and temperature checked
						twice daily. Every kennel has a inside cosy house and an
						outside exercise covered area. All bedding and beds are
						provided but we welcome you to bring yours should you
						wish.
					</p>
					<img src={dog1} alt='' />
					<img src={dog3} alt='' />
					<p className='tile-2'>
						Our top of the range foods include both wet and dry. If
						your dog requires a specific diet, we ask that you
						provide this for them. Bowls are supplied and we offer
						fresh water in their kennel at all times.
					</p>
					<p className='tile-3'>
						If your doggie requires medication during their stay, we
						can happily administer this. We simply require that you
						write all the details on the medication boxes and we
						will require you to fill out a quick medical form for
						them.
					</p>
					<img src={dog2} alt='' />
				</div>
			</section>
			<section className='links'>
				<Link to='/services'>
					<p>Find out more about us</p>
				</Link>
				<Link to='/contact'>
					<p>Get in touch with us</p>
				</Link>
			</section>
		</main>
	);
}
