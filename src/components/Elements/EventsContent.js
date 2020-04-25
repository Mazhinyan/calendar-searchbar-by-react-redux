import React from 'react';
import PropTypes from 'prop-types';


const EventsContent = ({ data, isEvent, day }) => {
	if (isEvent) {
		const ind = data.days.indexOf(day);
		const statusIncomp = data.event[ind].data.reduce((prevVal, key) => (
			key.status === 'incomplete' ? prevVal + 1 : prevVal), 0);
		return (
			<span>
				{data.event[ind].data.length}
				{' '}
				To do Item
				{!!statusIncomp && `${statusIncomp} is incomplete`}
			</span>
		);
	}
	return null;
};


export default EventsContent;

EventsContent.propTypes = {
	isEvent: PropTypes.bool.isRequired,
	day: PropTypes.number.isRequired,
	data: PropTypes.shape({
		days: PropTypes.instanceOf(Array).isRequired,
		event: PropTypes.instanceOf(Array).isRequired,
	}).isRequired,
};
