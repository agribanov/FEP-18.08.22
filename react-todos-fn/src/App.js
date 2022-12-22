import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Gallery from './modules/gallery/components/Gallery';
import GalleryPhotos from './modules/gallery/components/GalleryPhotos';
import Navigation from './modules/common/components/Navigation';
import Todos from './modules/todos/components/Todos';
import Users from './modules/users/components/Users';
import { useState } from 'react';

function App() {
    const [currentPath, setCurrentPath] = useState('gallery');

    return (
        <>
            <Navigation currentPath={currentPath} navigate={setCurrentPath} />
            {/* {currentPath === 'todos' ? <Todos /> : null}
            {currentPath === 'users' ? <Users /> : null}
            {currentPath === 'gallery' ? <Gallery /> : null} */}

            <Routes>
                <Route path="todos" element={<Todos />} />
                <Route path="users" element={<Users />} />
                <Route path="gallery" element={<Gallery />}>
                    <Route path=":albumId" element={<GalleryPhotos />}></Route>
                </Route>

                <Route path="/" element={<Navigate to="gallery" />} />
            </Routes>
        </>
    );
}

export default App;
