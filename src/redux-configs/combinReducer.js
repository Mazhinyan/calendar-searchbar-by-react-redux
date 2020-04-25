import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import modalReducer from '../components/Modal/redux/reducer';
import fakeDataReducer from '../components/Calendar/redux/reducer';

const rootReducer = (history) => combineReducers({
	router: connectRouter(history),
	data: fakeDataReducer,
	modal: modalReducer,
});

export default rootReducer;
