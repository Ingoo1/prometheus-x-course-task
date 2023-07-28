import React, { useState, useContext, useRef, useEffect } from 'react';

import UserContext from '../context/UserContent';

const SignInFormComponent = ({ setIsLoggedIn }) => {
  const { username, setUsername } = useContext(UserContext);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  function validateUsername(username) {
    const regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{4,16}$/;

    if (!regex.test(username)) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function onChangeHandler({ target: { value } }) {
    setUsername(value);
    validateUsername(value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    validateUsername(username);
    if (!error) {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={onSubmitHandler} className="form" name="sign_in_form">
        <h3 className="form__title">Sign in to your account</h3>
        <div className="form__container">
          <input
            autoComplete="off"
            className="form__input"
            type="text"
            name="name"
            id="name"
            onChange={onChangeHandler}
            ref={inputRef}
          />
          <span className="form__message">
            {error ? 'Required: 3-16 characters with at least one letter' : ''}
          </span>
        </div>
        <button
          disabled={username ? false : true}
          className="form__btn btn"
          type="submit"
        >
          Sign&nbsp;in
        </button>
      </form>
    </>
  );
};

export default SignInFormComponent;
