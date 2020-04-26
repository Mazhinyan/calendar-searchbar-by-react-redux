import { combineReducers } from 'redux';
import modalReducer from '../components/Modal/redux/reducer';
import fakeDataReducer from '../components/Calendar/redux/reducer';

const rootReducer = combineReducers({
	data: fakeDataReducer,
	modal: modalReducer,
});

export default rootReducer;
