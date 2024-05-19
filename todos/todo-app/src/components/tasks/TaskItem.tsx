// src/components/tasks/TaskItem.tsx

import React from 'react';

const TaskItem = ({ task }: { task: { id: number; title: string; status: string } }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-bold">{task.title}</h3>
      <p className={`badge ${task.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
        {task.status}
      </p>
    </div>
  );
};

export default TaskItem;
