import { REMOVE_ACTION, MARK_AS_DONE, ADD_ITEM_ACTION } from './types';

function removeAction(column, row) {
	return {
		type: REMOVE_ACTION,
		column,
		row,
	};
}


function doneAction(column, row) {
	return {
		type: MARK_AS_DONE,
		column,
		row,

	};
}


function addItemAction(item) {
	return {
		type: ADD_ITEM_ACTION,
		item,
	};
}


export { addItemAction, doneAction, removeAction };
