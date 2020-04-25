import { MODAL_CLOSE, MODAL_OPEN } from './types';

const initailState = {
	isOpen: false,
};

export default (state = initailState, { type, day }) => {
	switch (type) {
	case MODAL_CLOSE:
		return { isOpen: false };
	case MODAL_OPEN:
		return { isOpen: true, day };
	default:
		return state;
	}
};
