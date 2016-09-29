import React, { PropTypes } from 'react'
import Venue from './Venue'

const VenueList = ({ venues, onEditClick }) => (
  <div>
    <h2>Lugares</h2>
    <ul>
      {venues.map(venue =>
        <Venue
          key={venue.id}
          {...venue}
          onClick={() => onEditClick(venue.id)}
        />
      )}
    </ul>
  </div>
);

VenueList.propTypes = {
  venues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEditClick: PropTypes.func.isRequired
}

export default VenueList