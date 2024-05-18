// src/components/TaskScheduling.tsx

import React from 'react';

const TaskScheduling = () => {
  return (
    <div className="mt-4">
      <label className="label">Due Date:</label>
      <input type="date" className="input input-bordered w-full mb-4" />
      <label className="label">Due Time:</label>
      <input type="time" className="input input-bordered w-full" />
    </div>
  );
};

export default TaskScheduling;
