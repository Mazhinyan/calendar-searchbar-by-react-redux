import React from 'react';
import { Range } from '../../helpers';


const EmpytiDays = () => {
	const empytDays = (() => {
		const date = new Date();
		date.setDate(1);// set date for next line
		const wDay = date.getDay();// see which week day started  month

		return Range(wDay ? wDay - 1 : 6);// if day is sunday wDay equal 0, otherwise is 1,2,..,6
	})();

	return (
		<>
			{empytDays.length && empytDays.map((key) => (
				<div key={key} className="day_sqr column" />
			))}
		</>
	);
};


export default EmpytiDays;
