import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
	const [el] = useState(document.createElement('aside'));
	const portalRoot = document.getElementById('portal');

	useEffect(() => {
		portalRoot.appendChild(el);

		return () => {
			portalRoot.removeChild(el);
		};
	}, [el, portalRoot]);

	return ReactDOM.createPortal(children, el);
};

export default Portal;
