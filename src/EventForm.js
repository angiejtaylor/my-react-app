// EventForm.js
import React, { useState } from 'react';

const EventForm = () => {
  // Local state to manage form data
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission, e.g., send data to a server
    console.log('Date:', date);
    console.log('Event:', event);
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          Event:
          <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;


