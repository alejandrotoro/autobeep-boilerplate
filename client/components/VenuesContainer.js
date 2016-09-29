import { connect } from 'react-redux'
import { editVenue } from '../actions/index'
import VenueList from './VenueList'

import { browserHistory } from 'react-router'

import constants from './constants'

const getVenues = (venues, filter) => {
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
      constants.AUTH.token = data.access_token;
      this.setState({token: data.access_token});
      console.log("this.state: ", this.state);
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
    venues: getVenues(state.venues, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEditClick: (id) => {
      dispatch(editVenue(id))
    }
  }
}

const VenuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueList)

export default VenuesContainer