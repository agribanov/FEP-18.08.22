import { useEffect, useState } from 'react';

import todosService from '../services/todosService';

export default function useTodos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        todosService
            .getList()
            .then(setTodos)
            .finally(() => setIsLoading(false));
    }, []);

    function toggleTodo(id) {
        const todo = todos.find((item) => item.id === id);
        setIsLoading(true);
        todosService
            .update({ ...todo, isDone: !todo.isDone })
            .then((data) => {
                setTodos(
                    todos.map((item) => (item.id === data.id ? data : item))
                );
            })
            .finally(() => setIsLoading(false));
    }

    function deleteTodo(id) {
        setIsLoading(true);
        todosService
            .delete(id)
            .then(() => {
                setTodos(todos.filter((item) => item.id !== id));
            })
            .finally(() => setIsLoading(false));
    }

    function createTodo(newTodo) {
        setIsLoading(true);
        todosService
            .create({ ...newTodo, isDone: false })
            .then((data) => {
                setTodos([...todos, data]);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        todos,
        isLoading,
        toggleTodo,
        deleteTodo,
        createTodo,
    };
}
