import React from 'react';

function EventList({ events }) {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
