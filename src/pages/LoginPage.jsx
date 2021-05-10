import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/auth';

import styles from './pages.module.scss';

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
      <div className={styles.Page}>
        <h2>Page login</h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Type email"
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Type password"
            />
          </label>

          <button type="submit">Sing in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginPage);
