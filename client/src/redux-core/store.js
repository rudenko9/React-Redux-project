import {applyMiddleware, createStore} from 'redux';

import promise from 'redux-promise-middleware';//Use Redux middleware to respond to and modify state change
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './reducers';


const store = createStore(appReducer, applyMiddleware(promise, thunk, logger));//Use Redux middleware to respond to and modify state change


export default store;
