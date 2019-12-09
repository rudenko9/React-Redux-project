import {applyMiddleware, createStore} from 'redux';

import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(promise, thunk, logger));


export default store;
