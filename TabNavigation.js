import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = ['Profile', 'Settings', 'Notifications'];

  return (
    <div className="tab-nav">
      {tabs.map(tab => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
