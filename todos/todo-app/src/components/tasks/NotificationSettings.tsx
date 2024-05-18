// src/components/NotificationSettings.tsx

import React from 'react';

const NotificationSettings = () => {
  return (
    <div className="mt-4">
      <label className="label">Notification Preferences:</label>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="checkbox" />
          <span>Email Notifications</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="checkbox" />
          <span>SMS Notifications</span>
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
