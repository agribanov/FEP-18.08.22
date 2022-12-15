import ListItem from '../ListItem/ListItem';
import React from 'react';

function ListBody({ contacts, onDelete, onEdit }) {
    return (
        <div>
            {contacts.map((item) => (
                <ListItem
                    key={item.id}
                    contact={item}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default ListBody;
