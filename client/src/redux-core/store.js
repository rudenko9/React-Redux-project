import {createStore, applyMiddleware} from 'redux';

import promise from 'redux-promise-middleware';//Use Redux middleware to respond to and modify state change
import logger from 'redux-logger';

import appReducer from './reducers';


const store = createStore(appReducer, applyMiddleware(promise, logger));


export default store;
