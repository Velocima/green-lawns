import React, { useRef, useState, useLayoutEffect } from 'react';
import useWindowSize from './useWindowSize';
import '../css/about.css';
import ownerImage from '../images/good-boys-and-owner.jpg';
import dog1 from '../images/dog-placeholder-1.jpg';
import dog2 from '../images/dog-placeholder-2.jpg';
import dog3 from '../images/dog-placeholder-3.jpg';

export default function About() {
	const [width, height] = useWindowSize();
	const [animationIsPlaying, setAnimationIsPlaying] = useState({
		facilitiesBanner: 'paused',
		firstRow: 'paused',
		secondRow: 'paused',
		thirdRow: 'paused',
	});

	const facilitiesBannerRef = useRef(null),
		firstRowRef = useRef(null),
		secondRowRef = useRef(null),
		thirdRowRef = useRef(null);

	useLayoutEffect(() => {
		const topPosition = (element) => element.current.getBoundingClientRect().top;
		const bottomPosition = (element) => element.current.getBoundingClientRect().bottom;

		const facilitiesBannerPosition = topPosition(facilitiesBannerRef),
			firstRowPosition = topPosition(firstRowRef),
			secondRowPosition = topPosition(secondRowRef),
			thirdRowPosition = topPosition(thirdRowRef);

		const onScroll = () => {
			const scrollPosition = window.scrollY + height;
			if (
				animationIsPlaying.facilitiesBanner !== 'running' &&
				facilitiesBannerPosition < scrollPosition
			) {
				setAnimationIsPlaying((prevState) => ({
					...prevState,
					facilitiesBanner: 'running',
				}));
			}
			if (animationIsPlaying.firstRow !== 'running' && firstRowPosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, firstRow: 'running' }));
			}
			if (animationIsPlaying.secondRow !== 'running' && secondRowPosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, secondRow: 'running' }));
			}
			if (animationIsPlaying.thirdRow !== 'running' && thirdRowPosition < scrollPosition) {
				setAnimationIsPlaying((prevState) => ({ ...prevState, thirdRow: 'running' }));
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [width, height]);

	return (
		<main className='about-container'>
			<section className='family'>
				<div className='image-container'>
					<img src={ownerImage} alt='' />
				</div>
				<div className='family-text'>
					<div className='overflow-container'>
						<h1>More than just a business</h1>
					</div>
					<div className='overflow-container'>
						<p>
							We are a highly reputable and established boarding kennels offering
							first class care for our guests. We are situated just outside Monmouth
							within easy reach of the M4 and A449. Our Kennels are fully licensed by
							Monmouthshire County Council and Insured by Pet Plan UK Ltd. We pride
							ourselves in treating each guest as an individual and we care with our
							kindness and attention to detail. We exercise our doggies three times a
							day in our beautiful enclosed paddocks where they can socialise with
							others or, if you prefer can be exercised individually. We specialise in
							anxious or nervous dogs, giving them the extra time to either make
							friends with others or to be relaxed just with us.
						</p>
					</div>
				</div>
			</section>
			<section className='facilities'>
				<div
					className='banner'
					ref={facilitiesBannerRef}
					style={{ animationPlayState: animationIsPlaying.facilitiesBanner }}
				>
					<h1>Our facilities</h1>
				</div>
				<div className='tiles'>
					<p
						className='tile-1'
						style={{ animationPlayState: animationIsPlaying.firstRow }}
						ref={firstRowRef}
					>
						Our Kennels are arranged in two blocks with ten kennels in each. They are
						all heated and temperature checked twice daily. Every kennel has a inside
						cosy house and an outside exercise covered area. All bedding and beds are
						provided but we welcome you to bring yours should you wish.
					</p>
					<img
						src={dog1}
						alt=''
						style={{ animationPlayState: animationIsPlaying.firstRow }}
					/>
					<img
						src={dog3}
						alt=''
						style={{ animationPlayState: animationIsPlaying.secondRow }}
					/>
					<p
						className='tile-2'
						style={{ animationPlayState: animationIsPlaying.secondRow }}
						ref={secondRowRef}
					>
						Our top of the range foods include both wet and dry. If your dog requires a
						specific diet, we ask that you provide this for them. Bowls are supplied and
						we offer fresh water in their kennel at all times.
					</p>
					<p
						className='tile-3'
						style={{ animationPlayState: animationIsPlaying.thirdRow }}
						ref={thirdRowRef}
					>
						If your doggie requires medication during their stay, we can happily
						administer this. We simply require that you write all the details on the
						medication boxes and we will require you to fill out a quick medical form
						for them.
					</p>
					<img
						src={dog2}
						alt=''
						style={{ animationPlayState: animationIsPlaying.thirdRow }}
					/>
				</div>
			</section>
		</main>
	);
}
