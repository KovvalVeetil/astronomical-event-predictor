import React, { useState } from 'react';

function LocationInput({ onSubmit }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Get Events</button>
    </form>
  );
}

export default LocationInput;
