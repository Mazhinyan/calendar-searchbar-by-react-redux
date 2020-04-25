import React from 'react';
import {
	BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import EventList from './components/EventList';
import Modal from './components/Modal';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={EventList} path="/event/:id" exact />
					<Route component={EventList} path="/event/" exact />
				</Switch>
				<Modal />
			</Router>

		</>
	);
}

export default App;
