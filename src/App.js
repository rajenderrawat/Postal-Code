import React, { useState } from 'react';
import ZipCodeForm from './ZipCodeForm';
import LocationInfo from './LocationInfo';
import axios from 'axios';
import './App.css'; 

const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchLocationInfo = async (zipCode) => {
    setLoading(true);
    setError(null);

    try {
      
      const response = await axios.get(`https://api.zippopotam.us/in/${zipCode}`);

      setLocation({
        country: response.data.country,
        state: response.data.state,
        placeName: response.data.places[0]['place name'],
      });
    } catch (error) {
      
      setError('Failed to fetch location information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setLocation(null);
  };

  return (
    <div className="app-container">
      <h1>Zip Code Information App</h1>
      <div className="form-container">
        <ZipCodeForm onFormSubmit={fetchLocationInfo} />
      </div>
      <div className="location-container">
        <LocationInfo
          location={location}
          loading={loading}
          error={error}
          onClear={handleClear}
        />
      </div>
    </div>
  );
};

export default App;
