import { applyMiddleware, combineReducers, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import filtersReducer from './reducers/filtersReducer';
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

const rootReducer = combineReducers({
    filters: filtersReducer,
    todos: todosReducer,
});
const middlewares = applyMiddleware(myLogger, thunk, logger);

const store = createStore(rootReducer, middlewares);

export default store;
