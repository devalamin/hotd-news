import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { newUser, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner className='text-center' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    if (!newUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;