import { configureStore } from '@reduxjs/toolkit';
import filtersSliceReducer from './filtersSlice';
import todosSliceReducer from './todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosSliceReducer,
        filters: filtersSliceReducer,
    },
});

export default store;
