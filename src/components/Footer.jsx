import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import { pages } from '../contentJs/pages';

export default function Footer() {
	return (
		<footer>
			<ul>
				<li key='first-item'>Navigate</li>
				{pages.map((page, i) => (
					<li key={`${i}${page}`}>
						<Link to={page.route}>{page.navText}</Link>
					</li>
				))}
			</ul>
			<p>
				Our Address:
				<br />
				Green Lawns
				<br />
				Mitchel Troy
				<br />
				Monmouth
				<br />
				NP25 4BX
			</p>
			<p>
				Contact us: <br />
				<a href='tel:01600740111'>
					<span>01600 740111</span>
				</a>{' '}
				<br />
				Mobile:{' '}
				<a href='tel:07815534990'>
					<span>07815 534990</span>
				</a>
			</p>
			<p>Website created by Max Hartley</p>
		</footer>
	);
}
