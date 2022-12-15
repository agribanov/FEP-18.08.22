import ListBody from '../ListBody/ListBody';
import ListHeader from '../ListHeader/ListHeader';
import React from 'react';

function List({ contacts, onDelete, onEdit }) {
    return (
        <div>
            <ListHeader />
            <ListBody contacts={contacts} onDelete={onDelete} onEdit={onEdit} />
        </div>
    );
}

export default List;
