import React from 'react';
import {
	CheckDate, DAYS, Range,
	MONTHS,
} from '../../helpers';

import { Day, EmpytiDays, WeekDays } from '../Elements';


const Calendar = () => {
	const date = CheckDate();
	// create array/range , which will be help create template
	const daysRange = Range(DAYS[date.month]);

	return (
		<section className="calendar_body">
			<section title="calendar-title" className="title">
				<h1 title="date">{`${MONTHS[date.month]} ${date.year}`}</h1>
			</section>
			<WeekDays />
			<EmpytiDays />
			{
				daysRange.map((key) => <Day today={date.day === key} day={key} key={key} />)
			}
		</section>
	);
};


export default Calendar;
