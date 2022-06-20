import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginEmail: '',
      loginPassword: '',
      isButtonDisabled: true,
    };
  }

  handleInputsChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { loginEmail, loginPassword, isButtonDisabled } = this.state;
    return (
      <>
        <label htmlFor="loginEmail">
          <input
            type="text"
            id="loginEmail"
            data-testid="email-input"
            value={ loginEmail }
            onChange={ this.handleInputsChange }

          />
        </label>
        <label htmlFor="loginPassword">
          <input
            type="password"
            id="loginPassword"
            data-testid="password-input"
            value={ loginPassword }
            onChange={ this.handleInputsChange }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isButtonDisabled }
        >
          Enter
        </button>
      </>
    );
  }
}

export default Login;
