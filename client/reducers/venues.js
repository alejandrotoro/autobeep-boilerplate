import { REQUEST_VENUES, RECEIVE_VENUES, ADD_VENUE } from '../actions'

function getVenues(state = {}, action) {
  switch (action.type) {
    case RECEIVE_VENUES:
    case REQUEST_VENUES:
      return action.venues || [];
    case ADD_VENUE:
    default:
      return state;
  }
}

export default getVenues