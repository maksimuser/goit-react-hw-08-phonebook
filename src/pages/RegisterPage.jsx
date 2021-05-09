import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth';

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
      <div>
        <h2>Страница регистрации</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
