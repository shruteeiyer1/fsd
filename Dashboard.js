import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import Profile from './Profile';
import Settings from './Settings';
import Notifications from './Notifications';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'Notifications':
        return <Notifications />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="dashboard">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
