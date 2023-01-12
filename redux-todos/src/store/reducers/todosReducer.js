import {
    ACTION_CREATE,
    ACTION_PUSH,
    ACTION_REMOVE,
    ACTION_SET_TODOS,
    ACTION_UPDATE,
    SET_IS_LOADING,
} from '../actions/todos';

const INITIAL_STATE = {
    isLoading: false,
    todos: [],
};

export default function todosReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            };
        case ACTION_UPDATE:
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };

        case ACTION_REMOVE:
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== payload),
            };

        case ACTION_PUSH:
            return {
                ...state,
                todos: [...state.todos, payload],
            };

        case ACTION_SET_TODOS:
            return {
                ...state,
                todos: payload,
            };
        default:
            return state;
    }
}
