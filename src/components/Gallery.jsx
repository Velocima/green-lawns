import React from 'react';
import '../css/gallery.css';

export default function Gallery(props) {
	return (
		<section className='gallery'>
			{props.images.map((image, i) => (
				<div className='overflow-container'>
					<img src={image} alt='' key={i} />
				</div>
			))}
		</section>
	);
}
