import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataSelector, CheckDate, MONTHS } from '../../helpers';
import { TableRow } from '../Elements';
import { openModal } from '../Modal/redux';


const EventList = () => {
	const { id } = useParams(); // get day from url params
	const { days, event } = useSelector((state) => dataSelector(state)); // get data from store
	const index = days.indexOf(+id);// day have events or not (+ parse 'number' to number)
	const dispatch = useDispatch();// ref. store.dispatch
	const modalOPen = () => {
		dispatch(openModal(+id));// dispatch action
	};
	if (!id) {
		return <Redirect to="/" />;
	}
	return (
		<section className="table_conten">
			<div className="table_conten_header">
				<h4>
					TO DO list in
					{' '}
					{MONTHS[CheckDate().month] }
					{' '}
					{id}
				</h4>
				{' '}
				<button type="button" className="add_tem" onClick={modalOPen}>add item</button>
			</div>
			{index >= 0 ? (
				<table className="table_to_do">
					<thead>
						<tr>
							<th>To-do Item</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>

						{event[index].data.map((key, i) => (
							<TableRow
								key={key.id}
								title={key.title}
								description={key.description}
								status={key.status}
								columnID={i}
								rowIndex={index}
								dayForSet={+id}
							/>
						))}
					</tbody>
				</table>
			) : (
				<span>
					Oops: in
					{' '}
					{MONTHS[CheckDate().month] }
					{' '}
					{id}
					{' '}
					not have event. But you can  add To do item
				</span>
			)}

		</section>
	);
};


export default EventList;
