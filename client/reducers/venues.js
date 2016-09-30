import { REQUEST_VENUES, RECEIVE_VENUES } from '../actions'

function getVenues(state = {}, action) {
  console.log("ESTA ENTRANDO POR EL getVenues ===================================");
  switch (action.type) {
    case RECEIVE_VENUES:
    case REQUEST_VENUES:
      return action.venues || [];
      // return Object.assign({}, state, {
      //   veneus: action.venues
      // });
    default:
      return state;
  }
}

export default getVenues