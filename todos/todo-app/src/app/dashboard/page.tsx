// src/app/dashboard/page.tsx

import React from 'react';

import Editor from '../../components/tasks/TaskEditor'  // Removed the .tsx extension and used a relative path
import TaskInput from '../../components/tasks/TaskInput'
import TaskList from '../../components/tasks/TaskList'
import TaskDelegation from '../../components/tasks/TaskDelegation'
import TaskScheduling from '../../components/tasks/TaskScheduling'
import NotificationSettings from '../../components/tasks/NotificationSettings'

export default function DashboardPage() {
  return (
    <div>
      <h1>AI To-Do List</h1>
      <Editor />
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
      <TaskInput />
      <TaskDelegation />
      <TaskScheduling />
      <NotificationSettings />
      <TaskList />
    </div>
  );
}
