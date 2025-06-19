import React from 'react';

const CodeEditor = ({ content, language, type = 'code' }) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        {type === 'component' ? (
          <div className="react-component-container">
            {content}
          </div>
        ) : (
          <pre className="text-sm leading-relaxed whitespace-pre-wrap">
            <code className={`language-${language}`}>
              {content}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;