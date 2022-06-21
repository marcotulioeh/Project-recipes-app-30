import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  saveTokensToLocalStorage,
  saveUserEmailToLocalStorage,
} from '../helpers/loginLocalStorage';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [buttonCondition, setButtonCondition] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const minimumLengthPassword = 6;
    const emailValidation = /\S+@\S+\.\S+/;
    const shouldButtonBeEnabled = emailValidation.test(userEmail)
      && userPassword.length > minimumLengthPassword;

    setButtonCondition(shouldButtonBeEnabled);
  }, [userEmail, userPassword, setButtonCondition]);

  const submitButton = () => {
    // console.log('CLIQUEI');
    saveTokensToLocalStorage();
    saveUserEmailToLocalStorage(userEmail);
    history.push('/foods');
  };

  return (
    <>
      <label htmlFor="loginEmail">
        <input
          type="text"
          id="loginEmail"
          data-testid="email-input"
          value={ userEmail }
          onChange={ ({ target }) => setUserEmail(target.value) }

        />
      </label>
      <label htmlFor="loginPassword">
        <input
          type="password"
          id="loginPassword"
          data-testid="password-input"
          value={ userPassword }
          onChange={ ({ target }) => setUserPassword(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ buttonCondition }
        onClick={ submitButton }
      >
        Enter
      </button>
    </>
  );
}

export default Login;
