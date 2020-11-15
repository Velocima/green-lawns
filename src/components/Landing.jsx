import React, { useRef, useState, useLayoutEffect } from 'react';
import '../css/landing.css';
import { Review } from './Review';
import { reviews } from '../contentJs/Reviews';
import { Link } from 'react-router-dom';

export default function Landing() {
	const [isVisible, setIsVisible] = useState({
		reviewBanner: false,
		reviewBackground: false,
		review1: false,
		review2: false,
		review3: false,
		review4: false,
		review5: false,
		review6: false,
		review7: false,
		review8: false,
	});

	const reviewBannerRef = useRef(null),
		reviewBackgroundRef = useRef(null),
		review1Ref = useRef(null),
		review2Ref = useRef(null),
		review3Ref = useRef(null),
		review4Ref = useRef(null),
		review5Ref = useRef(null),
		review6Ref = useRef(null),
		review7Ref = useRef(null),
		review8Ref = useRef(null);

	const reviewRefs = [
		review1Ref,
		review2Ref,
		review3Ref,
		review4Ref,
		review5Ref,
		review6Ref,
		review7Ref,
		review8Ref,
	];
	useLayoutEffect(() => {
		const topPosition = (element) => element.getBoundingClientRect().top;
		const bottomPosition = (element) => element.getBoundingClientRect().bottom;

		console.log(review1Ref.current);
		const reviewBannerPosition = topPosition(reviewBannerRef.current),
			reviewBackgroundPosition = topPosition(reviewBackgroundRef.current),
			review1Position = bottomPosition(review1Ref.current),
			review2Position = bottomPosition(review2Ref.current),
			review3Position = bottomPosition(review3Ref.current),
			review4Position = bottomPosition(review4Ref.current),
			review5Position = bottomPosition(review5Ref.current),
			review6Position = bottomPosition(review6Ref.current),
			review7Position = bottomPosition(review7Ref.current),
			review8Position = bottomPosition(review8Ref.current);

		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			if (!isVisible.reviewBanner && reviewBannerPosition < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, reviewBanner: true }));
			}
			if (!isVisible.reviewBackground && reviewBackgroundPosition < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, reviewBackground: true }));
			}
			if (!isVisible.review1 && review1Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review1: true }));
			}
			if (!isVisible.review2 && review2Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review2: true }));
			}
			if (!isVisible.review3 && review3Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review3: true }));
			}
			if (!isVisible.review4 && review4Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review4: true }));
			}
			if (!isVisible.review5 && review5Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review5: true }));
			}
			if (!isVisible.review6 && review6Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review6: true }));
			}
			if (!isVisible.review7 && review7Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review7: true }));
			}
			if (!isVisible.review8 && review8Position < scrollPosition) {
				setIsVisible((prevState) => ({ ...prevState, review8: true }));
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

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
			<section className='reviews'>
				<div
					className='reviews-banner'
					ref={reviewBannerRef}
					style={{ animationPlayState: isVisible.reviewBanner ? 'running' : 'paused' }}
				>
					<h2>First rate customer service</h2>
				</div>
				<div className='reviews-container'>
					<div
						className='background-shader'
						ref={reviewBackgroundRef}
						style={{
							animationPlayState: isVisible.reviewBackground ? 'running' : 'paused',
						}}
					></div>
					{reviews.map((review, i) => (
						<Review
							className={`review review${i + 1}`}
							review={review.review}
							author={review.author}
							key={`${i}${review.author}`}
							reviewRef={reviewRefs[i]}
							animate={isVisible[`review${i + 1}`]}
						/>
					))}
				</div>
			</section>
		</main>
	);
}
