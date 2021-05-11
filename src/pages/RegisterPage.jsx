import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../redux/auth';

import styles from './pages.module.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.Page}>
        <h2>Page register</h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
              placeholder="Type name"
            />
          </label>
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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
