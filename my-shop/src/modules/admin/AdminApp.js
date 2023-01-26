import LeftNavigation from './common/components/LeftNavigation';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import React from 'react';
import TopBar from './common/components/TopBar';

function AdminApp() {
    return (
        <ProtectedRoute roles={['admin', 'sales']}>
            <TopBar />
            <LeftNavigation />
            <Outlet />
        </ProtectedRoute>
    );
}

export default AdminApp;
