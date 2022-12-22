import PhotosList from './PhotosList';
import React from 'react';
import { useParams } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos';

function GalleryPhotos() {
    const { albumId } = useParams();

    const photos = usePhotos(albumId);

    return <PhotosList list={photos} />;
}

export default GalleryPhotos;
