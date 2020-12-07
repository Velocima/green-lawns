import React from 'react';

export default function Gallery(props) {
	return (
		<section className='gallery'>
			{props.images.map((image, i) => (
				<img src={image} alt='' key={i} />
			))}
		</section>
	);
}
