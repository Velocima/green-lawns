import React, { useState } from 'react';
import '../css/gallery.css';

export default function Gallery(props) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState(props.images[0]);

	const handleImageClick = ({ target }) => {
		setIsModalOpen(true);
		setModalImage(target.src);
	};
	const handleButtonClick = () => {
		setIsModalOpen(false);
	};

	return (
		<section className='gallery'>
			{props.images.map((image, i) => (
				<div className='overflow-container' key={i}>
					<img src={image} alt='' onClick={handleImageClick} />
				</div>
			))}
			<div
				className='modal'
				style={{
					opacity: isModalOpen ? '1' : '0',
					pointerEvents: isModalOpen ? 'all' : 'none',
				}}
			>
				<button onClick={handleButtonClick}>X</button>
				<img src={modalImage} alt='' />
			</div>
		</section>
	);
}
