import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/auth';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Страница авторизации</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Почта
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Пароль
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
