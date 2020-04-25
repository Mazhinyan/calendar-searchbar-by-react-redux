import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { doneAction, removeAction } from '../Calendar/redux';

const TableRow = ({
	title, description, status, columnID, rowIndex,
}) => {
	const dispath = useDispatch();
	const isComplet = status === 'complete';
	const remove = () => {
		dispath(removeAction(columnID, rowIndex));
	};
	const markAsDone = () => {
		dispath(doneAction(columnID, rowIndex));
	};
	return (
		<tr>
			<td>
				<h3>{title}</h3>
				<p>{description }</p>
			</td>
			<td>{status}</td>
			<td>
				<button type="button" onClick={remove}>
					Remove
				</button>

				{!isComplet && <button type="button" onClick={markAsDone}>Mark as done</button>}

			</td>
		</tr>
	);
};


export default TableRow;


TableRow.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	columnID: PropTypes.number.isRequired,
	rowIndex: PropTypes.number.isRequired,
};
