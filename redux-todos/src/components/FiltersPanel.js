import { filterByQuery, selectFilters } from '../toolkitStore/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import FiltersPanelButton from './FiltersPanelButton';
import React from 'react';

function FiltersPanel() {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();
    return (
        <div>
            <FiltersPanelButton
                value="all"
                label="All"
                currentFilter={filters.byStatus}
            />
            <FiltersPanelButton
                value="done"
                label="Done"
                currentFilter={filters.byStatus}
            />
            <FiltersPanelButton
                value="todo"
                label="Todo"
                currentFilter={filters.byStatus}
            />
            <input
                style={{ float: 'right' }}
                type="text"
                placeholder="Search..."
                onChange={(e) => dispatch(filterByQuery(e.target.value))}
            />
        </div>
    );
}

export default FiltersPanel;
