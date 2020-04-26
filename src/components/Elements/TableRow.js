import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { doneAction, removeAction } from '../Calendar/redux';

const TableRow = ({
	title, description, status, columnID, rowIndex,
}) => {
	const dispath = useDispatch();
	const isComplet = status === 'complete';
	const [confirm, setConfirm] = useState([false, 0, '']);// [is comfitm, order, message]


	const Confirmable = (boo, order) => {
		const conf = [boo, order, order ? 'Are you shure mark as done this item ?' : 'Are you shure remove this item ?'];
		setConfirm([...conf]);
	};

	const remove = () => {
		dispath(removeAction(columnID, rowIndex));
		setConfirm([false, 0, '']);
	};
	const markAsDone = () => {
		dispath(doneAction(columnID, rowIndex));
		setConfirm([false, 1, '']);
	};


	return (
		<tr>
			<td>
				<h3>{title}</h3>
				<p>{description }</p>
			</td>
			<td>{status}</td>
			<td>
				<div className="action_content">
					{confirm[0]
						? (
							<>
								<p>{confirm[2]}</p>
								<button type="button" onClick={confirm[1] ? markAsDone : remove}>Yes</button>
								<button type="button" onClick={() => Confirmable(false, 0)}>No</button>
							</>
						) : (

							<>
								{' '}
								<button
									type="button"
									onClick={() => Confirmable(true, 0)}
									disabled={confirm[0]}
									style={{ cursor: !confirm[0] ? 'pointer' : 'not-allowed' }}
								>
									Remove
								</button>
								{!isComplet && (
									<button
										type="button"
										onClick={() => Confirmable(true, 1)}
										disabled={confirm[0]}
										style={{ cursor: !confirm[0] ? 'pointer' : 'not-allowed' }}
									>
										Mark as done
									</button>
								)}

							</>

						)}

				</div>
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
