import React from 'react'
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
// import Register from './Register'
import VenuesContainer from './components/VenuesContainer'
import Venue from './components/Venue'
import Login from './components/Login'
import NewVenue from './components/NewVenue'

import { Provider } from 'react-redux';
import store, { history } from './store';

module.exports = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/new-venue" component={NewVenue}/> 
        <Route path="/venues" component={VenuesContainer}>
           <Route path="/venue/:venueId" component={Venue}/> 
        </Route>
      </Route>
    </Router>
  </Provider>
)