import React from 'react';
import { ChevronDown } from 'lucide-react';
import CompanyFileTree from './CompanyFileTree';
import PersonalFileTree from './PersonalFileTree';

const Sidebar = ({ 
  isCompCollapsed, 
  companyFileStructure,
  personalFileStructure,
  openFolders, 
  toggleFolder, 
  activeTab, 
  setActiveTab
}) => {
  if (isCompCollapsed) return null;

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">EXPLORER</h3>
        <div className="flex items-center text-gray-300 mb-3">
          <ChevronDown size={16} className="mr-1" />
          <span className="text-sm font-medium">PORTFOLIO-DEV</span>
        </div>
      </div>
      <div className="overflow-y-auto">
        <PersonalFileTree 
          items={personalFileStructure}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="overflow-y-auto">
        <CompanyFileTree 
          items={companyFileStructure}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default Sidebar;