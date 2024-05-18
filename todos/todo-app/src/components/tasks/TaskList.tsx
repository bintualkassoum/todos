// src/components/TaskList.tsx

import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  // Placeholder tasks
  const tasks = [
    { id: 1, title: 'Task 1', status: 'Pending' },
    { id: 2, title: 'Task 2', status: 'Completed' },
  ];

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
