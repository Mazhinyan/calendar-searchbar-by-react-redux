import { MODAL_CLOSE, MODAL_OPEN } from './types';

function openModal(day) {
	return {
		type: MODAL_OPEN,
		day,
	};
}

function closeModal() {
	return {
		type: MODAL_CLOSE,
	};
}


export { closeModal, openModal };
