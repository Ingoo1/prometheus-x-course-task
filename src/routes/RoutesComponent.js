import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from '../routes/ProtectedRoute';

//Pages
import SignInPage from '../pages/SignInPage';
import CatalogPage from '../pages/CatalogPage';
import NotFoundPage from '../pages/NotFoundPage';
import PurchaseBasketPage from '../pages/PurchaseBasketPage';
import CurrentBookPage from '../pages/CurrentBookPage';

//Utils
import { urlPages } from '../utils/settings';
import RouteProtector from './RouteProtector';

const RoutesComponent = ({ isLoggedIn, setIsLoggedIn }) => {
  const {
    singInPath,
    catalogPath,
    bookPath,
    purchasePath,
    errorPath,
    mainPath,
  } = urlPages;

  return (
    <Routes>
      <Route
        path={mainPath}
        element={
          <ProtectedRoute
            login={isLoggedIn}
            path={catalogPath}
            redirectPath={singInPath}
            element={Navigate}
          />
        }
      />
      <Route
        path={singInPath}
        element={
          <RouteProtector isLoggedIn={isLoggedIn} redirectPath={catalogPath}>
            <SignInPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          </RouteProtector>
        }
      />
      <Route path={catalogPath} element={<CatalogPage />} />
      <Route
        path={`${bookPath}/:pageID`}
        element={isLoggedIn && <CurrentBookPage />}
      />
      <Route
        path={purchasePath}
        element={isLoggedIn && <PurchaseBasketPage />}
      />
      <Route path={errorPath} element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
