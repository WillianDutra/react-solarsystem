import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="name">{name}</p>
        <hr className="hr" />
        <i className="fa-solid fa-calendar icon" />
        <p data-testid="mission-year" className="year">{year}</p>
        <i className="fa-solid fa-location-dot icon" />
        <p data-testid="mission-country" className="country">{country}</p>
        <i className="fa-solid fa-flag icon" />
        <p data-testid="mission-destination" className="destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: 'Mission name',
  year: 'Mission year',
  country: 'Mission country',
  destination: 'Mission destination',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
