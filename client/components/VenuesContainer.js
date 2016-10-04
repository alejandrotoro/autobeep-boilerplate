import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchVenuesIfNeeded } from '../actions'
import Venues from './Venues'
import { Link } from 'react-router'

class VenuesContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchVenuesIfNeeded())
  }

  render() {
    const { venues, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Link to='/new-venue' className="btn btn-info">Crear lugar</Link>
        {isFetching && venues.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && venues.length === 0 &&
          <h2>Empty.</h2>
        }
        {venues.length > 0 &&
          <div>
            <Venues venues={venues} />
          </div>
        }
      </div>
    )
  }
}

VenuesContainer.propTypes = {
  venues: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { getVenues } = state;
  const venues = state.venues;
  const { isFetching, lastUpdated } = getVenues || { isFetching: true, lastUpdated: Date.now() };

  return {
    venues,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(VenuesContainer)
