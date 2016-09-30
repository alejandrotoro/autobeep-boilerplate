import { REQUEST_VENUES, RECEIVE_VENUES } from '../actions'

function getVenues(state = {}, action) {
  switch (action.type) {
    case RECEIVE_VENUES:
    case REQUEST_VENUES:
      return action.venues || [];
    default:
      return state;
  }
}

export default getVenues