const initialState = {
	days: [1, 13],
	event: [
		{
			id: 1,
			data: [{
				id: 0, title: 'To do item 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'complete',
			}, {
				id: 1, title: 'To do item', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'incomplete',
			}, {
				id: 2, title: 'To do item 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'complete',
			}],
		},
		{
			id: 13,
			data: [{
				id: 0, title: 'To do item 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'complete',
			}, {
				id: 1, title: 'To do item 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'incomplete',
			}, {
				id: 2, title: 'To do item 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status: 'complete',
			}],
		},
	],
};

export default initialState;
