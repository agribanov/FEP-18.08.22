import { Outlet, useNavigate } from 'react-router-dom';

import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';
import React from 'react';
import useAlbums from '../hooks/useAlbums';
import useGallery from '../hooks/useGallery';

function Gallery() {
    const albums = useAlbums();
    const navigate = useNavigate();

    function onBtnClick() {
        setTimeout(() => navigate('/todos'), 4000);
    }

    return (
        <div className="row">
            <div className="three columns">
                <button onClick={onBtnClick}>Open Todos</button>
                <AlbumsList list={albums} />
            </div>
            <div className="nine columns">
                <Outlet />
            </div>
        </div>
    );
}

export default Gallery;
