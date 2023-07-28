import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContent';

const RouteProtector = ({ isLoggedIn, redirectPath, children }) => {
  const { username } = useContext(UserContext);
  if (isLoggedIn && username) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default RouteProtector;
