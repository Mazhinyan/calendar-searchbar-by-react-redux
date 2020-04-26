import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataSelector } from '../../helpers';

const Header = () => {
	const { event } = useSelector((state) => dataSelector(state));

	const count = event.reduce((pr, key) => {
		let incom = 0;
		key.data.forEach((element) => {
			if (element.status === 'incomplete') {
				incom += 1;
			}
		});

		return [pr[0] + key.data.length, incom + pr[1]];
	},
	[0, 0]);
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<span>
					{count[0]}
					{' '}
					To Do item
					{count[1]
						? (
							<>
								(which
								{' '}
								{count[1]}
								{' '}
								is incomplete)
							</>
						) : null}

				</span>
			</nav>
		</header>
	);
};

export default Header;
