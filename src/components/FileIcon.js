import React from 'react';
import pythonIcon from '../icons/python.svg';
import javascriptIcon from '../icons/javascript.svg';
import notebookIcon from '../icons/notebook.svg';
import reactIcon from '../icons/react.svg';

const FileIcon = ({ file }) => {
  const iconMap = {
    'md': '📋',
    'js': (
      <img
        src={javascriptIcon}
        alt="JavaScript"
        style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
      />
    ),
    'tsx': (
      <img
        src={reactIcon}
        alt="React"
        style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
      />
    ),
    'json': '🟫',
    'py': (
      <img
        src={pythonIcon}
        alt="Python"
        style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
      />
    ),
    'dart': '🎯',
    'go': '🐹',
    'ipynb': (
      <img
        src={notebookIcon}
        alt="Notebook"
        style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
      />
    ),
  };
  
  const ext = file.name.split('.').pop();
  const icon = file.icon || iconMap[ext] || '📄';
  return (
    <span className="text-sm mr-2">
      {typeof icon === 'string' ? icon : React.cloneElement(icon)}
    </span>
  );
};

export default FileIcon;