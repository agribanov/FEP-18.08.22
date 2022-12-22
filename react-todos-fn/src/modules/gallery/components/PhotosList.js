import PhotosListItem from './PhotosListItem';
import React from 'react';

function PhotosList({ list }) {
    return (
        <div>
            {list.map((item) => (
                <PhotosListItem key={item.id} photo={item} />
            ))}
        </div>
    );
}

export default PhotosList;
