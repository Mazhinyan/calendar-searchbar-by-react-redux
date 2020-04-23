import React from 'react';
import PropTypes from 'prop-types';

const Day = ({ today, day }) => (
	<div className="day_sqr column">
		<span className={today ? 'today' : ''}>{day}</span>
	</div>
);

export default Day;


Day.propTypes = {
	day: PropTypes.number.isRequired,
	today: PropTypes.bool.isRequired,
};
