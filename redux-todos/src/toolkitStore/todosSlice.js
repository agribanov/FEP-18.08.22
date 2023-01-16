import api from '../api';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    todos: [],
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setTodos: (state, { payload }) => {
            state.todos = payload;
        },
        updateTodo: (state, { payload }) => {
            state.todos = state.todos.map((item) =>
                item.id === payload.id ? payload : item
            );
        },
        removeTodo: (state, { payload }) => {
            state.todos = state.todos.filter((item) => item.id !== payload);
        },
        addTodo: (state, { payload }) => {
            state.todos.push(payload);
        },
    },
});

export const { setTodos, setIsLoading, updateTodo, removeTodo, addTodo } =
    todosSlice.actions;

export default todosSlice.reducer;

export function getList() {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        api.get('todos').then(({ data }) => {
            dispatch(setTodos(data));
            dispatch(setIsLoading(false));
        });
    };
}

export function createTodo(newTodo) {
    return (dispatch) => {
        api.post('todos', {
            ...newTodo,
            isDone: false,
        }).then(({ data }) => dispatch(addTodo(data)));
    };
}
export function deleteTodo(id) {
    return (dispatch) => {
        api.delete('todos/' + id).then(() => dispatch(removeTodo(id)));
    };
}

export function toggleTodo(id) {
    return (dispatch, getState) => {
        const todo = getState().todos.todos.find((item) => item.id === id);

        api.put('todos/' + id, { ...todo, isDone: !todo.isDone }).then(
            ({ data }) => dispatch(updateTodo(data))
        );
    };
}

export function selectTodos({ todos, filters }) {
    let list = todos.todos;

    switch (filters.byStatus) {
        case 'todo':
            list = list.filter((item) => !item.isDone);
            break;
        case 'done':
            list = list.filter((item) => item.isDone);
            break;
    }

    return filters.query
        ? list.filter((item) => item.title.indexOf(filters.query) >= 0)
        : list;
}
