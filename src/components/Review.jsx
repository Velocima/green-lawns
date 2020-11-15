import React from 'react';
import '../css/review.css';

export const Review = (props) => {
	return (
		<div className={props.className} ref={props.reviewRef}>
			<p>{props.review}</p>
			<p>{` - ${props.author}`}</p>
		</div>
	);
};
