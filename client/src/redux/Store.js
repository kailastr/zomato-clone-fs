//main entry point or storage of redux
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

//redux middleware
const middleware = [thunk];

// to check if we are on the development phase or Notification. We want to use redux only if it is on the development phase.Notification
if (process.env.NODE_ENV === "development") {
    // const { Logger, default: logger } = require("redux-logger");
    const { logger } = require("redux-logger");
    middleware.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;