import './TodosListItem.css';

import React from 'react';
import classNames from '../../common/utils/classnames';

function TodosListItem({ todo: { id, title, isDone }, onToggle, onDelete }) {
    function onDeleteClick(e) {
        e.stopPropagation();
        onDelete(id);
    }

    return (
        <div
            className={classNames('u-full-width', 'todo-item', {
                done: isDone,
            })}
            onClick={() => onToggle(id)}
        >
            {title}
            <span className="delete-btn" onClick={onDeleteClick}>
                X
            </span>
        </div>
    );
}

export default TodosListItem;
