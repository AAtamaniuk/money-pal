import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable

const store = createStore(rootReducer, composeEnhancers());


export default store;
