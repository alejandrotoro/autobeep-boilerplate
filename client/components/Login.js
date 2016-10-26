import React from 'react'
import { browserHistory } from 'react-router'
import constants from './constants'

const api_rul = constants.API.API_URL;

const LoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    e.preventDefault();
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (!email || !password) {
      return;
    }

    $.ajax({
      url: api_rul + 'admins/authenticate',
      dataType: 'json',
      type: 'POST',
      cache: false,
      data: {email: email, password: password},
      success: function(data) {
        constants.AUTH.token = data.access_token;
        this.setState({token: data.access_token});
        browserHistory.push('/venues');
      }.bind(this),
      error: function(xhr, status, err) {
        browserHistory.push('/');
        console.error(api_rul + 'admins/authenticate', status, err.toString());
      }.bind(this)
    });

  },
  render() {
    return (
      <div className='row'>
        <form className="adminLoginForm form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Inicio de Sesión</legend>
  
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
              <div className="col-lg-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
              </div>
            </div>
  
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-lg-2 control-label">Contraseña</label>
              <div className="col-lg-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
            </div>

            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </div>
            </div>

          </fieldset>
        </form>
      </div>
      
    )
  }
});

export default LoginForm;