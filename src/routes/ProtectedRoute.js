import React, { useContext } from 'react';
import UserContext from '../context/UserContent';

const ProtectedRoute = ({ login, path, redirectPath, element: Element }) => {
  const user = useContext(UserContext);
  return <Element to={login && user ? path : redirectPath} replace />;
};

export default ProtectedRoute;
