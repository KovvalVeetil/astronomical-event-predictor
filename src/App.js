import React, { useState } from 'react';
import Header from './components/Header';
import LocationInput from './components/LocationInput';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleLocationSubmit = (location) => {
    //placeholder
    setEvents([
      { title: 'Meteor Shower', date: '2024-10-01', description: 'A spectacular meteor shower.' },
      { title: 'Lunar Eclipse', date: '2024-10-15', description: 'A total lunar eclipse.' }
    ]);
  };

  return (
    <div>
      <Header />
      <LocationInput onSubmit={handleLocationSubmit} />
      <EventList events={events} />
      {selectedEvent && <EventDetail event={selectedEvent} />}
    </div>
  );
}

export default App;
