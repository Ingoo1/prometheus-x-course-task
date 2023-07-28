import React, { useEffect, useState } from 'react';

//Context
import ThemeContext from './context/ThemeContext';
import UserContext from './context/UserContent';
import { PurchaseProvider } from './context/PurchaseContext';

//Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ErrorBoundary from './components/ErrorBoundaryComponent';
import CatalogProvider from './components/CatalogProviderComponent';

//Routes
import RoutesComponent from './routes/RoutesComponent';

//Styles
import './styles/app.scss';

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem('theme') || 'light';
  });
  const [username, setUsername] = useState(
    () => window.localStorage.getItem('username') || ''
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(window.localStorage.getItem('isLoggedIn')) || false
  );

  const [booksPurchase, setBooksPurchase] = useState(() => {
    const storedData = window.localStorage.getItem('purchase');
    return storedData ? JSON.parse(storedData) : {};
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('username', username);
  }, [username]);

  useEffect(() => {
    window.localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={{ username, setUsername }}>
        <PurchaseProvider value={{ booksPurchase, setBooksPurchase }}>
          <ErrorBoundary>
            <HeaderComponent
              toggleTheme={toggleTheme}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
            <CatalogProvider>
              <RoutesComponent
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </CatalogProvider>
            <FooterComponent />
          </ErrorBoundary>
        </PurchaseProvider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
