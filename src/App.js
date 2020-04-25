import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import EventList from './components/EventList';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route component={Home} path="/" exact />
					<Route component={EventList} path="/event/:id" exact />
				</Switch>

			</Router>

		</>
	);
}

export default App;
