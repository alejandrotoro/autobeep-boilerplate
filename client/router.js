import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
// import Register from './Register'
// import Venues from './Venues'
// import Venue from './Venue'
import Login from './components/Login'

import { Provider } from 'react-redux';
import store, { history } from './store';

module.exports = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        // <Route path="/venues" component={Venues}>
          // <Route path="/venues/:venueId" component={Venue}/>
        // </Route>
      </Route>
    </Router>
  </Provider>
)