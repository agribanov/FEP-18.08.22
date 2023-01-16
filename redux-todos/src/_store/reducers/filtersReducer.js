import { FILTER_BY_QUERY, FILTER_BY_STATUS } from '../actions/filters';

const INITIAL_STATE = {
    byStatus: 'todo',
    query: '',
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case FILTER_BY_QUERY:
            return { ...state, query: payload };
        case FILTER_BY_STATUS:
            return { ...state, byStatus: payload };
        default:
            return state;
    }
}
