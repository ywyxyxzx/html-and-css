import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import counter from './couter.reducer';

const store = createStore(counter, applyMiddleware(logger, thunk));
console.log(store.getState());

export default store;
