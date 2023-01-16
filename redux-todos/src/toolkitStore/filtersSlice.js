import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    byStatus: 'todo',
    query: '',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filterByStatus: (state, { payload }) => {
            state.byStatus = payload;
        },
        filterByQuery: (state, { payload }) => {
            state.query = payload;
        },
    },
});

export const { filterByStatus, filterByQuery } = filtersSlice.actions;
export default filtersSlice.reducer;

export function selectFilters({ filters }) {
    return filters;
}
