import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux';
import VenueList from './VenueList'
import { browserHistory } from 'react-router'
import constants from './constants'

const getVenues = (venues) => {
  const api_rul = constants.API.API_URL;
  const token = constants.AUTH.token;

  $.ajax({
    url: api_rul + 'admins-venues',
    dataType: 'json',
    type: 'GET',
    cache: false,
    headers: {
      "Authorization": "Basic " + token
    },
    success: function(data) {
      this.setState({venues: data});
      console.log("data: ", data);
      browserHistory.push('/venues');
    }.bind(this),
    error: function(xhr, status, err) {
      browserHistory.push('/');
      console.error(`${api_rul}admins/authenticate`, status, err.toString());
    }.bind(this)
  });

}

const mapStateToProps = (state) => {
  return {
    venues: getVenues(state.venues)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onEditClick: (id) => {
//       dispatch(editVenue(id))
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}


const VenuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueList)

export default VenuesContainer
