// src/app/dashboard/page.tsx

import React from 'react';
import Editor from '../../components/tasks/TaskEditor'  // Removed the .tsx extension and used a relative path

export default function DashboardPage() {
  return (
    <div>
      <h1>AI To-Do List</h1>
      <Editor />
    </div>
  );
}
