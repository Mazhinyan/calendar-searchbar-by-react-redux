
const CheckDate = () => {
	const date = new Date();

	return {
		year: date.getFullYear(),
		month: date.getMonth(),
		weekDay: date.getDay(),
		day: date.getDate(),
	};
};


export default CheckDate;
