import React from 'react';
import '../css/gallery.css';

export default function Gallery(props) {
	return (
		<section className='gallery'>
			{props.images.map((image, i) => (
				<div className='overflow-container' key={i}>
					<img src={image} alt='' />
				</div>
			))}
		</section>
	);
}
