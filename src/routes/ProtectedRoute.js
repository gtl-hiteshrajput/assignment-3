import React from 'react';
import { localStorageKey } from 'constants';
import { Navigate } from 'react-router-dom';

const { userData } = localStorageKey;

const ProtectedRoute = ({ children }) => {
    return localStorage.getItem(userData) ? children : <Navigate to='/login' />
};

export default ProtectedRoute;