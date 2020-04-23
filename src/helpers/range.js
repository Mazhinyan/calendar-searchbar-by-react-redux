const Range = (count) => {
	const arr = Array.from(Array(count));
	arr.forEach((key, ind) => {
		arr[ind] = ind + 1;
	});
	return arr;
};
export default Range;
