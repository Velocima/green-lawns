import React from 'react';
import '../css/review.css';

export const Review = (props) => {
	return (
		<div
			className={props.className}
			ref={props.reviewRef}
			style={{
				animationPlayState: props.animate ? 'running' : 'paused',
			}}
		>
			<p>{props.review}</p>
			<p>{` - ${props.author}`}</p>
		</div>
	);
};
