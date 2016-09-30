import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router'
import NavLink from './NavLink'
import Login from './Login'

const App = (props) => {
  return (
    <div className='wrapper'>
      <div className="navbar navbar-default">
        <div className='container'>
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">Autobeep</Link>
          </div>
          <div className='navbar-collapse collapse' id='navbar-main'>
            <ul role="nav" className="nav navbar-nav navbar-right">
              <li><Link to="/register">Registro</Link></li>
              <li><Link to="/venues">Lugares</Link></li>
              <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container margin-header'>
        {cloneElement(props.children || <Login/>, props)}
      </div>
      <div className='footer container'></div>
    </div>
  );
}

export default App;