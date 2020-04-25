import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataSelector } from '../../helpers';
import EventsContent from './EventsContent';

const Day = ({ today, day }) => {
	const data = useSelector((state) => dataSelector(state));
	const isEvent = data?.days.includes(day);


	return (
		<div className={`day_sqr column wrapper_day ${isEvent ? 'isEvent' : ''}`}>
			<span className={today ? 'today' : ''}>
				{day}
			</span>
			{ isEvent ? (
				<Link to={`/event/${day}`}>
					<div className="event">
						<EventsContent data={data} isEvent={isEvent} day={day} />
					</div>
				</Link>
			) : null}
		</div>
	);
};

export default Day;


Day.propTypes = {
	day: PropTypes.number.isRequired,
	today: PropTypes.bool.isRequired,
};
