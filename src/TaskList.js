// TaskList.js
import React from 'react';

const TaskList = () => {
  const tasks = [
    'Task 1',
    'Task 2',
    'Task 3',
    // Add more tasks as needed
  ];

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;

