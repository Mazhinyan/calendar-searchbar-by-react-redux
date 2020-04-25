const Range = (count) => {
	// maybe very long for read
	// const arr = Array.from(Array(count)).map((key, ind, array) => {
	// 	array[ind] = ind + 1;
	// });
	const arr = Array.from(Array(count));
	arr.forEach((key, ind) => {
		arr[ind] = ind + 1;
	});
	return [...arr];
};
export default Range;
