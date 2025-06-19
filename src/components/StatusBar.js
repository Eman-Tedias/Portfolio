import React from 'react';

const StatusBar = ({ language }) => {
  return (
    <div className="h-6 bg-blue-600 flex items-center justify-between px-4 text-xs">
      <div className="flex items-center space-x-4">
        <span>🔗 master</span>
        <span>❌ 0</span>
        <span>⚠️ 0</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>{language}</span>
      </div>
    </div>
  );
};

export default StatusBar;