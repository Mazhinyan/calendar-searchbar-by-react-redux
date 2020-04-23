import React from 'react';
import {
	CheckDate, WEEK,
} from '../../helpers';


const WeekDays = () => {
	const date = CheckDate();
	return (
		<>
			{
				WEEK.map((key, index) => (
					<div key={key} className="week_day column">
						<span className={date.weekDay - 1 === index ? 'today' : ''}>{key}</span>
					</div>
				))
			}
		</>
	);
};

export default WeekDays;
