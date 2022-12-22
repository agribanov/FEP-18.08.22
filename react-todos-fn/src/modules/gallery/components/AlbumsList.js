import AlbumsListItem from './AlbumsListItem';
import React from 'react';

function AlbumsList({ list }) {
    return (
        <ul>
            {list.map((item) => (
                <AlbumsListItem key={item.id} album={item} />
            ))}
        </ul>
    );
}

export default AlbumsList;
