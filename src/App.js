// App.js
import React from 'react';
import Calendar from './Calendar';
import EventForm from './EventForm';

const App = () => {
  // You can set default values for the month and year or fetch them dynamically
  const defaultMonth = 'March';
  const defaultYear = 2024;

  return (
    <div className="App">
      <h1>Event Calendar</h1>
      {/* Display the Calendar */}
      <Calendar month={defaultMonth} year={defaultYear} />
      {/* Display the EventForm */}
      <EventForm />
    </div>
  );
};

export default App;

