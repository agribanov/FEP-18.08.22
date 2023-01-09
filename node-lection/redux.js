import { createStore } from 'redux';

const INC_ACTION = 'INC_ACTION';
const DEC_ACTION = 'DEC_ACTION';
const SET_ACTION = 'ACTION/SET';
const ADD_ACTION = 'COUNTS/ADD';

function add(payload) {
    return { type: ADD_ACTION, payload };
}

function inc() {
    return { type: INC_ACTION };
}

function reducer(state, { type, payload }) {
    switch (type) {
        case INC_ACTION:
            return { ...state, counts: state.counts + 1 };
        case DEC_ACTION:
            return { ...state, counts: state.counts - 1 };
        case SET_ACTION:
            return { ...state, counts: payload };
        case ADD_ACTION:
            return { ...state, counts: state.counts + payload };
        default:
            return state;
    }
}

const store = createStore(reducer, {
    name: 'Alex',
    filter: null,
    counts: 0,
});

store.subscribe(() => {
    const data = store.getState();
});

store.dispatch(inc());

store.dispatch(add(10));
store.dispatch(add(100));
store.dispatch(add(50));
store.dispatch(add(40));
