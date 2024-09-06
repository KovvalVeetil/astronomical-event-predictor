import React from 'react';

function EventDetail({ event }) {
  if (!event) return <p>Select an event to see details.</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetail;
