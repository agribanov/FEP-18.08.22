import React from 'react';
import { filterByStatus } from '../toolkitStore/filtersSlice';
import { useDispatch } from 'react-redux';

function FiltersPanelButton({ value, label, currentFilter }) {
    const dispatch = useDispatch();
    return (
        <button
            className={currentFilter === value ? 'button-primary' : ''}
            onClick={() => dispatch(filterByStatus(value))}
        >
            {label}
        </button>
    );
}

export default FiltersPanelButton;
