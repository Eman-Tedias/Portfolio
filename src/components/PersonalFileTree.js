import React from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen } from 'lucide-react';
import FileIcon from './FileIcon';

const PersonalFileTree = ({ items, openFolders, toggleFolder, activeTab, setActiveTab, level = 0 }) => {
  return items.map((item, index) => (
    <div key={index} style={{ paddingLeft: `${level * 16}px` }}>
      {item.type === 'folder' ? (
        <>
          <div 
            className="flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer text-gray-300"
            onClick={() => toggleFolder(item.name)}
          >
            {openFolders.includes(item.name) ? 
              <ChevronDown size={16} className="mr-1" /> : 
              <ChevronRight size={16} className="mr-1" />
            }
            {openFolders.includes(item.name) ? 
              <FolderOpen size={16} className="mr-2 text-blue-400" /> : 
              <Folder size={16} className="mr-2 text-blue-400" />
            }
            <span className="text-sm">{item.name}</span>
          </div>
          {openFolders.includes(item.name) && item.children && (
            <div>
              <PersonalFileTree
                items={item.children}
                openFolders={openFolders}
                toggleFolder={toggleFolder}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                level={level + 1}
              />
            </div>
          )}
        </>
      ) : (
        <div 
          className={`flex items-center py-1 px-2 hover:bg-gray-700 cursor-pointer text-gray-300 ${
            activeTab === item.name ? 'bg-gray-700' : ''
          }`}
          onClick={() => setActiveTab(item.name)}
        >
          <FileIcon file={item} />
          <span className="text-sm">{item.name}</span>
        </div>
      )}
    </div>
  ));
};

export default PersonalFileTree;