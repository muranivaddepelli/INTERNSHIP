import React from 'react'
import { getAuth } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const auth=getAuth();
    return auth.currentUser?children:<Navigate to='/login'/>;

}

export default PrivateRoute