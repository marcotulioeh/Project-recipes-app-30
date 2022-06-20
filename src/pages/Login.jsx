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
    this.setState(
      () => ({ [id]: value }),
      this.validadeInputsToEnableButton,
    );
  }

  validadeInputsToEnableButton = () => {
    const { loginEmail, loginPassword } = this.state;
    const minimumLengthPassword = 6;
    const emailValidation = /\S+@\S+\.\S+/;
    // console.log(emailValidation.test(loginEmail));
    // console.log(loginPassword.length > minimumLengthPassword);
    const shouldButtonBeEnabled = emailValidation.test(loginEmail)
      && loginPassword.length > minimumLengthPassword;
    this.setState({ isButtonDisabled: !shouldButtonBeEnabled });
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
