import React from 'react';
import { File, Smile, Linkedin, Github, Mail, Settings } from 'lucide-react';

const ActivityBar = ({ activeView, setActiveView }) => {
  return (
    <div className="w-12 bg-gray-800 flex flex-col items-center py-4 space-y-6">
      <Smile 
        size={24} 
        className={`cursor-pointer hover:text-blue-400 ${
          activeView === 'welcome' ? 'text-white' : 'text-gray-400'
        }`}
        onClick={() => setActiveView('welcome')}
      />
      <File 
        size={24} 
        className={`cursor-pointer hover:text-blue-400 ${
          activeView === 'explorer' ? 'text-white' : 'text-gray-400'
        }`}
        onClick={() => setActiveView('explorer')}
      />
      <Linkedin
        size={24}
        className="text-gray-400 cursor-pointer hover:text-blue-400"
        onClick={() => window.open('https://www.linkedin.com/in/emanturibio/')}
        />
      <Github
      size={24}
      className="text-gray-400 cursor-pointer hover:text-blue-400"
      onClick={() => window.open('https://github.com/Eman-Tedias')}
      />
      {/* <Mail size={24} className="text-gray-400 cursor-pointer hover:text-blue-400" /> */}
      <div className="flex-1"></div>
      <Settings size={24} className="text-gray-400 cursor-pointer hover:text-blue-400" />
    </div>
  );
};

export default ActivityBar;