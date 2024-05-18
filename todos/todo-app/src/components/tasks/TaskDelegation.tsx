// src/components/TaskDelegation.tsx

import React from 'react';

const TaskDelegation = () => {
  return (
    <div className="mt-4">
      <label className="label">Assign Task To:</label>
      <select className="select select-bordered w-full">
        <option value="self">Self</option>
        <option value="ai">AI</option>
      </select>
    </div>
  );
};

export default TaskDelegation;
