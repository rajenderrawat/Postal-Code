import React, { useState } from 'react';

const ZipCodeForm = ({ onFormSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Postal Code:
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="e.g., 400093"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ZipCodeForm;
