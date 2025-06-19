import React, { useState } from 'react';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import TabBar from './TabBar';
import CodeEditor from './CodeEditor';
import StatusBar from './StatusBar';
import WelcomeScreen from './WelcomeScreen';
import { companyFileStructure } from '../data/companyFileStructure';
import { personalFileStructure } from '../data/personalFileStructure';
import { getFileContent } from '../data/fileContents';

const VSCodePortfolio = () => {
  const [openFolders, setOpenFolders] = useState(['src', 'projects']);
  const [activeTab, setActiveTab] = useState('sobre-mim.md');
  const [compSidebarCollapsed, setCompSidebarCollapsed] = useState(false);
  const [activeView, setActiveView] = useState('welcome'); // 'welcome' ou 'explorer'

  const toggleFolder = (folder) => {
    setOpenFolders(prev => 
      prev.includes(folder) 
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    );
  };

  const currentFile = getFileContent(activeTab);

  const renderMainContent = () => {
    if (activeView === 'welcome') {
      return <WelcomeScreen />;
    }

    // Vista do explorador (original)
    return (
      <div className="flex-1 flex flex-col">
        {/* Tab Bar */}
        <TabBar activeTab={activeTab} />

        {/* Editor - ATUALIZADO para passar o type */}
        <CodeEditor 
          content={currentFile.content}
          language={currentFile.language}
          type={currentFile.type}
        />

        {/* Status Bar */}
        <StatusBar language={currentFile.language} />
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white font-mono">
      {/* Activity Bar */}
      <ActivityBar 
        activeView={activeView}
        setActiveView={setActiveView}
      />

      {/* Sidebar - só mostra na vista do explorador */}
      {activeView === 'explorer' && (
        <Sidebar 
          isCompCollapsed={compSidebarCollapsed}
          companyFileStructure={companyFileStructure}
          personalFileStructure={personalFileStructure}
          openFolders={openFolders}
          toggleFolder={toggleFolder}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* Main Content */}
      {renderMainContent()}
    </div>
  );
};

export default VSCodePortfolio;