import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataSelector } from '../../helpers';
import EventsContent from './EventsContent';
import { openModal } from '../Modal/redux';

const Day = ({ today, day }) => {
	const data = useSelector((state) => dataSelector(state));
	const isEvent = data?.days.includes(day);
	const dispatch = useDispatch();
	const addItem = () => {
		dispatch(openModal(day));
	};

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
			) : <button title="add event" type="button" className="addEvent" onClick={addItem}>+</button>}
		</div>
	);
};

export default Day;


Day.propTypes = {
	day: PropTypes.number.isRequired,
	today: PropTypes.bool.isRequired,
};
