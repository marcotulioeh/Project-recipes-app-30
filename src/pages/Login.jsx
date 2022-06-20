import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // loginEmail: '',
      // loginPassword: '',
      // isButtonDisabled: true,
    };
  }

  render() {
    return (
      <>
        <label htmlFor="email-input">
          <input
            type="text"
            id="email-input"
            data-testid="email-input"

          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </>
    );
  }
}

export default Login;
