import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'
import constants from './ComponentConstants'

const api_rul = constants.API.API_URL;

const LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (!email || !password) {
      return;
    }

    axios.post( api_rul + 'admins/authenticate', {
      email: email,
      password: password
    })
    .then(function (data) {
      constants.AUTH.token = data.data.access_token;
      browserHistory.push('/venues');
    })
    .catch(function (error) {
      console.log(error);
      // this.context.router.push('/');
    });

  },
  render() {
    return (
      <form className="adminLoginForm" onSubmit={this.handleSubmit}>
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={this.state.password} onChange={this.handlePasswordChange} />
        <input type="submit" value="Iniciar Sesión" />
      </form>
    )
  }
});

export default LoginForm;