// src/components/TaskInput.tsx

import React from 'react';
import Editor from './TaskEditor';

const TaskInput = () => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <input type="text" placeholder="Task Title" className="input input-bordered w-full mb-4" />
      <Editor />
      <div className="flex mt-4">
        <button className="btn btn-primary mr-2">Save Task</button>
        <button className="btn">Cancel</button>
      </div>
    </div>
  );
};

export default TaskInput;
