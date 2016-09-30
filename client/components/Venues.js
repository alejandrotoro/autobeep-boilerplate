import React, { PropTypes, Component } from 'react'
import Venue from './Venue'

export default class Venues extends Component {
  render() {
    return (
      <ul>
        {this.props.venues.map((venue, i) =>
          <li key={i}>{venue.name}</li>
        )}
      </ul>
    )
  }
}

Venues.propTypes = {
  venues: PropTypes.array.isRequired
}