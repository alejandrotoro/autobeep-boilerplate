import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './router'

const router = (
  <Router routes={routes} history={browserHistory}/>
);

render(router, document.getElementById('root'));
