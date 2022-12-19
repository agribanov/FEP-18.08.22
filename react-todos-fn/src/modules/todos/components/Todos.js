import Loading from '../../common/components/Loading';
import React from 'react';
import TodoForm from './TodoForm';
import TodosList from './TodosList';
import useTodos from '../hooks/useTodos';

function Todos() {
    const { todos, isLoading, toggleTodo, deleteTodo, createTodo } = useTodos();

    return (
        <div className="container">
            <Loading isLoading={isLoading} />
            <TodosList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
            <TodoForm onCreate={createTodo} />
        </div>
    );
}

export default Todos;
