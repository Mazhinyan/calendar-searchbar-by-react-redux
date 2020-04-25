import React, { useState } from 'react';


const SearchBar = () => {
	const [val, setVal] = useState('');
	const onInputCallback = ({ currentTarget }) => {
		const { value } = currentTarget;
		setVal(value);
	};
	return (
		<section className="search_bar_content">
			<input placeholder="Search here item by title" onInput={onInputCallback} />
			<button type="button" disabled={!val} style={{ cursor: val ? 'pointer' : 'not-allowed' }}>Search</button>
		</section>
	);
};


export default SearchBar;
