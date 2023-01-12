import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import todosReducer from './reducers/todosReducer';

function myLogger({ dispatch, getState }) {
    return (next) => {
        return (action) => {
            console.log('ACTION:', action);
            next(action);
        };
    };
}

const logger = createLogger({
    collapsed: true,
});

const middlewares = applyMiddleware(myLogger, thunk, logger);

const store = createStore(todosReducer, middlewares);

export default store;
