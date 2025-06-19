import React from 'react';

const FileIcon = ({ file }) => {
  const iconMap = {
    'md': '📝',
    'js': '🟨',
    'tsx': '🔷',
    'json': '🟫',
    'py': '🐍',
    'dart': '🎯',
    'go': '🐹'
  };
  
  const ext = file.name.split('.').pop();
  return <span className="text-sm mr-2">{file.icon || iconMap[ext] || '📄'}</span>;
};

export default FileIcon;