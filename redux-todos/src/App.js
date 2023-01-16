import React, { useEffect } from 'react';

import FiltersPanel from './components/FiltersPanel';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';
import { useSelector } from 'react-redux';

export default function App() {
    const isLoading = useSelector(({ isLoading }) => isLoading);
    return (
        <div className="container">
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <FiltersPanel />
                    <TodosList />
                    <TodoForm />
                </>
            )}
        </div>
    );
}
