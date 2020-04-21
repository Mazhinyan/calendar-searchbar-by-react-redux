import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer from './combinReducer';
import rootSaga from './root-saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const persistConfig = {
	key: 'root',
	blacklist: ['router'],
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(sagaMiddleware, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
	),
);
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
