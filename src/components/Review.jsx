import React from 'react';
import '../css/review.css';

export const Review = (props) => {
	return (
		<div className='review'>
			<p>{props.review}</p>
			<p>{props.author}</p>
		</div>
	);
};
