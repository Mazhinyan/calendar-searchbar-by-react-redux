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
						{/* week day 0 index is sunday, mondey start 1 ... */}
						<span className={(!date.weekDay && index===6) ||( date.weekDay -1 === index)?'today' :"" }>{key}</span>
					</div>
				))
			}
		</>
	);
};

export default WeekDays;
