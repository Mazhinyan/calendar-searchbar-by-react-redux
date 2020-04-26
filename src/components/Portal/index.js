import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
	const [el] = useState(document.createElement('aside'));
	const portalRoot = document.getElementById('portal');

	useEffect(() => {
		portalRoot.appendChild(el);

		return () => { // clean up func , when WillUnmount phase
			portalRoot.removeChild(el);
		};
	}, [el, portalRoot]);// when 2 element is ready

	return ReactDOM.createPortal(children, el);
};

export default Portal;
