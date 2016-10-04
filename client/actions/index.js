import fetch from 'isomorphic-fetch'
import { post, get } from 'axios';
import constants from '../components/constants'

const api_rul = constants.API.API_URL;

/*
 * action creators
 */

export function editVenue(index) {
  return { type: EDIT_VENUE, index }
}


/* Add Venues */
export const ADD_VENUE = 'ADD_VENUE'

export function addVenue(venue, venues) {
  return {
    type: ADD_VENUE,
    venues: venues.push(venue),
    receivedAt: Date.now()
  }
}

/* Request the venues */
export const REQUEST_VENUES = 'REQUEST_VENUES'

export function requestVenues() {
  return {
    type: REQUEST_VENUES
  }
}

/* Take the answer form the server */
export const RECEIVE_VENUES = 'RECEIVE_VENUES'

export function receiveVenues(venues) {
  return {
    type: RECEIVE_VENUES,
    venues: venues.venues,
    receivedAt: Date.now()
  }
}

/* Initial load */
export const VENUES_INITIAL_LOAD = 'VENUES_INITIAL_LOAD'

export function venuesInitialLoad() {
  return {
    type: VENUES_INITIAL_LOAD
  }
}

function fetchVenues() {
  console.log('ENTRA POR EL ACTIONS fetchVenues');
  return dispatch => {
    dispatch(requestVenues());
	const token = constants.AUTH.token;
    return get(`${api_rul}admin-venues`, {headers: {
        'Authorization': token }
      })
      .then(responseData => dispatch(receiveVenues(responseData.data)))
  }
}

function shouldFetchVenues(state) {
  console.log('ENTRA POR EL ACTIONS shouldFetchVenues');
  const venues = state.venues
  if (!venues) {
    return true
  } else if (venues.isFetching) {
    return false
  } else {
  	return true
  }
}

export function fetchVenuesIfNeeded() {
  console.log('ENTRA POR EL ACTIONS fetchVenuesIfNeeded');
  return (dispatch, getState) => {
    if (shouldFetchVenues(getState())) {
      return dispatch(fetchVenues())
    } else {
      return Promise.resolve()
    }
  }
}