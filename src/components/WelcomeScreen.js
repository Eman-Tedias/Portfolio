import React from 'react';

const WelcomeScreen = () => {
  return (
    <div className="flex-1 flex items-center bg-gray-900 text-white min-h-screen p-8" style={{marginLeft:'5%'}}>
      <div className="max-w-5xl">
        <h1 className="text-6xl font-light leading-tight font-mono">
            Olá!
        </h1>
        <h1 className="text-5xl font-light leading-tight font-mono">
          Sou o Eman, desenvolvedor full-stack com foco em{' '}
          <span className="text-yellow-400 font-medium">automações</span>{' '}
          para tornar processos de negócios mais{' '}
          <span className="text-yellow-400 font-medium">eficientes</span>.
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;