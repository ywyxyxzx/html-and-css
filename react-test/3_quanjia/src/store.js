import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

/**
 * Redux reducer for counter state management
 * @param {number} state - Current state, defaults to 0
 * @param {Object} action - Action object with type property
 * @returns {number} New state
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(counter, applyMiddleware(logger, thunk));
console.log(store.getState());
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());
// store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState());
export default store;
