import React from 'react';
import FileIcon from './FileIcon';

const TabBar = ({ activeTab }) => {
  return (
    <div className="flex bg-gray-800 border-b border-gray-700">
      <div className="flex items-center px-4 py-2 bg-gray-900 border-r border-gray-700">
        <FileIcon file={{ name: activeTab }} />
        <span className="text-sm text-white mr-3">{activeTab}</span>
        <button className="text-gray-400 hover:text-white">×</button>
      </div>
    </div>
  );
};

export default TabBar;