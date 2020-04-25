import initialState from './fakeData';
import { REMOVE_ACTION, MARK_AS_DONE, ADD_ITEM_ACTION } from './types';

export default (state = initialState, {
	type, column, row, item,
}) => {
	switch (type) {
	case REMOVE_ACTION: {
		const { days, event } = state;
		event[row].data.splice(column, 1); // remove item from event list
		if (!event[row].data.length) { // if day event container empty
			days.splice(row, 1);// remove day from  days list
			event.splice(row, 1);// remove day events list  from  events list
		}
		return { days: [...days], event: [...event] };
	}
	case MARK_AS_DONE: {
		const { event, days } = state;
		event[row].data[column].status = 'complete';// change status from incomlete to complete

		return { days: [...days], event: [...event] };
	}

	case ADD_ITEM_ACTION: {
		const { title, description, day } = item;
		const { event, days } = state;
		if (days.includes(day)) {
			const index = days.indexOf(day);// find index
			const id = event[index].data.length;// create id
			event[index].data.push({
				title, description, id, status: 'incomplete',
			});// push itrm in container
			return { days: [...days], event: [...event] };
		}

		days.push(day);
		event.push({
			id: day,
			data: [{
				title, description, id: 0, status: 'incomplete',
			}],
		});
		return { ...state };
	}

	default:
		return state;
	}
};
