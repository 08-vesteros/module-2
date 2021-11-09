import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { RootState } from './types';

export default (state: RootState) =>
	createStore(rootReducer, state, applyMiddleware(thunk));
