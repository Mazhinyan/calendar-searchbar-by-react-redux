import React from 'react';
import {
	CheckDate, DAYS, Range,
} from '../../helpers';

import { Day, EmpytiDays, WeekDays } from '../Elements';

const Calendar = () => {
	const date = CheckDate();
	// create array/range , which will be help create template
	const daysRange = Range(DAYS[date.month]);


	console.log(date, daysRange);
	return (
		<section className="calendar_body">
			<WeekDays />
			<EmpytiDays />

			{
				daysRange.map((key) => <Day today={date.day === key} day={key} key={key} />)
			}
		</section>
	);
};


export default Calendar;
