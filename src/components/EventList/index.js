import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataSelector } from '../../helpers';
import { TableRow } from '../Elements';

const EventList = () => {
	const { id } = useParams(); // get day from url params
	const { days, event } = useSelector((state) => dataSelector(state)); // get data from store
	const index = days.indexOf(+id);// day have events or not (+ parse 'number' to number)

	return (
		<section className="table_conten">
			<div className="table_conten_header">
				<button type="button" className="add_tem">add item</button>
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
						<tr>
							<td>To-do item</td>
							<td>Status</td>
							<td>Actions</td>
						</tr>
						{event[index].data.map((key, id) => (
							<TableRow
								key={key.id}
								title={key.title}
								despcription={key.despcription}
								status={key.status}
								columnID={id}
								rowIndex={index}
							/>
						))}
					</tbody>
				</table>
			) : <span>OOPS</span>}

		</section>
	);
};


export default EventList;
