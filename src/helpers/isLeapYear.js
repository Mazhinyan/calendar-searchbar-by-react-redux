
const isLeap = (year) => {
	if (typeof year === 'number' && !Number.isNaN(year)) {
		return !!(year % 4);
	}
	return null;
};
export default isLeap;
