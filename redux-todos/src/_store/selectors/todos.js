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
