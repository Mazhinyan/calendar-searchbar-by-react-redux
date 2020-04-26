import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from '../../helpers';

const SearchBar = () => {
	const { days, event } = useSelector((state) => dataSelector(state));
	const [val, setVal] = useState('');
	const onInputCallback = ({ currentTarget }) => {
		const { value } = currentTarget;// ceep input value
		const isNotPrabels = !value.split(' ').every((key) => key === '');// is all chart is " "
		if (isNotPrabels) {
			setVal(value);
		} else if (val) { // isNotPrabels is false baut val is trueable value
			setVal('');
		}
	};
	const [result, setResult] = useState(false);

	const close = () => {
		setResult(false);// for close result container
	};

	const search = () => {
		// bad idea
		let stop = false;// for help to understand is result found or not
		event.forEach((el, index) => {
			el.data.forEach((e, i) => {
				if (e.title.toLowerCase().search(val) !== -1) {
					setResult([index, i, e]);// set result list
					stop = true;
					return 0; // stoping second foreach
				}
			});
			if (stop) { return 0; }// first second foreach
		});
		if (!stop) {
			setResult([]);// if nothing find , set result empty array
		}
	};

	return (
		<section className="search_bar_content">
			<input placeholder="Search here item by title" onInput={onInputCallback} />
			<button
				type="button"
				disabled={!val}
				style={{ cursor: val ? 'pointer' : 'not-allowed' }}
				onClick={search}
			>
				Search
			</button>
			{result ? (
				<div className="result">
					<button className="close" type="button" onClick={close}>+</button>
					{result.length

						? (
							<>
								<h3>{days[result[0]]}</h3>
								<h4>{event[result[0]].data[result[1]].title}</h4>
								<p>{event[result[0]].data[result[1]].description}</p>
							</>
						)

						: 'Nothing found'}
				</div>
			) : null}

		</section>
	);
};


export default SearchBar;
