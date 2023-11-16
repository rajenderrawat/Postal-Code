import React from 'react';
import './App.css';

const LocationInfo = ({ location, loading, error, onClear }) => {
  return (
    <div className="location-info">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {location && (
        <div>
          <h2>Location Information</h2>
          <p>Country: {location.country}</p>
          <p>State: {location.state}</p>
          <p>Place Name: {location.placeName}</p>
          <button className="clear-button" onClick={onClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationInfo;
