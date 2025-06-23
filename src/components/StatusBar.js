import React from 'react';

const StatusBar = ({ language }) => {
  return (
    <div className="h-6 bg-gray-800 flex items-center justify-between px-4 text-xs">
      <div className="flex items-center space-x-4">
      </div>
      <div className="flex items-center space-x-4">
        <span>email de contato:</span>
        <span>emanturibio@gmail.com</span>
        <span></span>
        <span>{language}</span>
      </div>
    </div>
  );
};

export default StatusBar;