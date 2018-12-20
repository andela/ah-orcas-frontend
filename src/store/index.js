import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import allReducers from '../reducers';

const logger = createLogger();
const store = createStore(allReducers, {}, composeWithDevTools(applyMiddleware(logger, thunk)));
export default store;
