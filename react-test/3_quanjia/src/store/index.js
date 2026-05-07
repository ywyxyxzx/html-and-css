import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import counter from './couter.reducer';

const reducer = {
    counter:counter
}

const store = createStore(combineReducers(reducer), applyMiddleware(logger, thunk));
console.log(store.getState());

export default store;
