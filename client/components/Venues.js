import React, { PropTypes, Component } from 'react'
import Venue from './Venue'

export default class Venues extends Component {
  render() {
    return (
      <ul>
        {this.props.venues.map((venue, i) =>
          <div key={i}>
            <h2>{venue.name}</h2>
            <p>{venue.address}</p>
            <p>{venue.phonenumber}</p>
          </div>
        )}
      </ul>
    )
  }
}

Venues.propTypes = {
  venues: PropTypes.array.isRequired
}