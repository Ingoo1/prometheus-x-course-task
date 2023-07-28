import React, { useContext } from 'react';

//Context
import ThemeContext from '../context/ThemeContext';
//Components
import SignInFormComponent from '../components/SignInFormComponent';
import WelcomeImgComponent from '../components/WelcomeImgComponent';

const SignInPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const theme = useContext(ThemeContext);

  return (
    <main className={`block auth theme--${theme}`}>
      <div className="container">
        <h1 className="auth__title">Welcome to React Bookstore!</h1>
        <p className="auth__text">Explore a world of programming knowledge</p>
        <div className="auth__wrap">
          <div className="auth__picture">
            <WelcomeImgComponent />
          </div>
          <SignInFormComponent
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
