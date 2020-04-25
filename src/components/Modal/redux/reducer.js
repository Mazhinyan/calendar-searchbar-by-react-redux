const initailState = {
	isOpen: false,
};

export default (state = initailState, { type }) => {
	switch (type) {
	case 'Sdv':
		return { ...state };
	case 'Sdsdv':
		return { ...state };

	default:
		return state;
	}
};
