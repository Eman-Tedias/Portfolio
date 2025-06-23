import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
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
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [height, setHeight] = useState('auto');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (contentRef.current && isPortfolioOpen) {
      const newHeight = contentRef.current.scrollHeight;
      if (height !== newHeight + 'px' && height !== 'auto') {
        setHeight(newHeight + 'px');
      }
    }
  }, [isPortfolioOpen, height]);

  useEffect(() => {
    if (isPortfolioOpen && contentRef.current) {
      setIsTransitioning(true);
      
      // Usa múltiplos requestAnimationFrame para garantir renderização completa
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight + 'px');
          }
        });
      });

      // Configura ResizeObserver para detectar mudanças no conteúdo
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      resizeObserverRef.current = new ResizeObserver(() => {
        updateHeight();
      });

      resizeObserverRef.current.observe(contentRef.current);
    } else {
      setIsTransitioning(true);
      setHeight('0px');
      
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [isPortfolioOpen, updateHeight]);

  // Efeito para detectar mudanças no conteúdo das árvores
  useEffect(() => {
    if (isPortfolioOpen) {
      const timer = setTimeout(() => {
        updateHeight();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [personalFileStructure, companyFileStructure, openFolders, updateHeight, isPortfolioOpen]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (isPortfolioOpen) {
      // Aguarda um pouco mais antes de definir como auto
      setTimeout(() => {
        setHeight('auto');
      }, 100);
    }
  };

  if (isCompCollapsed) return null;

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">EXPLORER</h3>
        <div
          className="flex items-center text-gray-300 cursor-pointer select-none"
          onClick={() => setIsPortfolioOpen((prev) => !prev)}
        >
          {isPortfolioOpen ? (
            <ChevronDown size={16} className="mr-1" />
          ) : (
            <ChevronRight size={16} className="mr-1" />
          )}
          <span className="text-sm font-medium">PORTFOLIO-DEV</span>
        </div>
        <div
          className="portfolio-folder-content"
          style={{
            height: height,
            transition: isTransitioning ? 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : undefined,
            overflow: 'hidden',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          <div ref={contentRef} style={{ marginLeft: '4%' }}>
            {isPortfolioOpen && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;