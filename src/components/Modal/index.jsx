import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Portal from '../Portal';
import { modalSelector } from '../../helpers';
import { addItemAction } from '../Calendar/redux';
import { closeModal } from './redux';

const Modal = () => {
	const dispatch = useDispatch();
	const { isOpen, day } = useSelector((state) => modalSelector(state));
	const [formVals, setFormVals] = useState({ title: '', description: '' });
	const [err, setErr] = useState(false);
	const close = () => {
		dispatch(closeModal());
	};
	const submit = (e) => {
		e.preventDefault();// stope event
		const isNotPrabels = !formVals.title.split(' ').every((key) => key === '')
		&& !formVals.description.split(' ').every((key) => key === '');// sea not all chart is " " or not
		const isTureable = !!formVals.title && !!formVals.description;// if all properits is trueable

		if (isTureable && isNotPrabels) {
			dispatch(addItemAction(formVals));// dispatching addItemAction for add item
			close();// close modal
		} else {
			setErr(true);
		}
	};


	const inputing = ({ target }) => {
		/**
		 * get traget value
		 * get traget role
		 * create persist value from state
		 */
		const [{ value }, { rule }, persistVal] = [target, target.dataset, { ...formVals }];
		persistVal[rule] = value;// set rule filde
		persistVal.day = day;
		setFormVals({ ...persistVal });// set state
		if (err) {
			setErr(false);
		}
	};


	return (
		<>
			{isOpen && (
				<Portal>
					<>
						<div className="modal_body">
							<h3>Add To Do Item</h3>
							<form onSubmit={submit}>
								<input placeholder="Title" data-rule="title" onInput={inputing} />
								<textarea placeholder="Description" data-rule="description" onInput={inputing} />
								<section>
									<button type="submit" className="submit" title="add">Add</button>
									<button type="button" className="add" title="submit" onClick={close}>Cancel</button>
								</section>

							</form>
							{err && <p>etgrvfdc</p>}
						</div>
					</>
				</Portal>
			)}
		</>
	);
};
export default Modal;
