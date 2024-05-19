// src/components/tasks/TaskInput.tsx

import React, { useState } from 'react';

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleTaskSave = () => {
    // Logic to save the task using MultiOn API
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <input 
        type="text" 
        placeholder="Task Title" 
        className="input input-bordered w-full mb-4" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
      />
      <div className="flex mt-4">
        <button className="btn btn-primary mr-2" onClick={handleTaskSave}>Save Task</button>
        <button className="btn">Cancel</button>
      </div>
    </div>
  );
};

export default TaskInput;
