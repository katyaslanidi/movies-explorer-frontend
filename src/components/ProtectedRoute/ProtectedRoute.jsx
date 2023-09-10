import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ Component, ...props }) {
  return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
}

export default ProtectedRoute;