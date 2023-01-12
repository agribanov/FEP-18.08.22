import api from '../../api';

function createAction(type) {
    return (payload) => ({ type, payload });
}

export const SET_IS_LOADING = 'SET_IS_LOADING';
// export function setIsLoading(payload) {
//     return { type: SET_IS_LOADING, payload };
// }
export const setIsLoading = createAction(SET_IS_LOADING);

export const ACTION_UPDATE = 'ACTION_UPDATE';
// function updateTodo(payload) {
//     return { type: ACTION_UPDATE, payload };
// }
export const updateTodo = createAction(ACTION_UPDATE);
export function toggleTodo(id) {
    return (dispatch, getState) => {
        const todo = getState().todos.find((item) => item.id === id);

        api.put('todos/' + id, { ...todo, isDone: !todo.isDone }).then(
            ({ data }) => dispatch(updateTodo(data))
        );
    };
}

export const ACTION_REMOVE = 'ACTION_REMOVE';
// function removeTodo(payload) {
//     return { type: ACTION_REMOVE, payload };
// }
export const removeTodo = createAction(ACTION_REMOVE);

export function deleteTodo(id) {
    return (dispatch) => {
        api.delete('todos/' + id).then(() => dispatch(removeTodo(id)));
    };
}

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS';
// export function setTodos(payload) {
//     return { type: ACTION_SET_TODOS, payload };
// }
export const setTodos = createAction(ACTION_SET_TODOS);

export const ACTION_PUSH = 'ACTION_PUSH';
// function pushTodo(payload) {
//     return { type: ACTION_PUSH, payload };
// }
export const pushTodo = createAction(ACTION_PUSH);

export function createTodo(newTodo) {
    return (dispatch) => {
        api.post('todos', {
            ...newTodo,
            isDone: false,
        }).then(({ data }) => dispatch(pushTodo(data)));
    };
}

export function getList() {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        api.get('todos').then(({ data }) => {
            dispatch(setTodos(data));
            dispatch(setIsLoading(false));
        });
    };
}
