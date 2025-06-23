import React from 'react';

const WelcomeScreen = () => {
  return (
    <div className="relative flex-1 h-full bg-gray-900 text-white">
      {/* <div className="absolute top-6 left-6 z-10 flex items-center" style={{ marginTop: '2%' }}>
        <img 
          src="files/Vetor cima.png" 
          alt="Logo" 
          className="w-20 h-20 object-contain"
        />
        <span style={{ marginLeft: '10%'}} className="whitespace-nowrap">
          Acesse meus projetos
        </span>
      </div> */}
      <div className="flex items-center justify-center h-full p-8">
        <div className="max-w-5xl w-full flex items-center gap-12">
          <div className="flex-1 flex flex-col">
            <h1 className="text-6xl font-light font-mono mb-8">
              Olá!
            </h1>
            <h2 className="text-4xl font-light leading-tight font-mono">
              Sou o Eman, desenvolvedor full-stack com foco em{' '}
              <span className="text-yellow-400 font-medium">automações</span>{' '}
              para tornar processos de criação mais{' '}
              <span className="text-yellow-400 font-medium">eficientes</span>.
            </h2>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="files/Profile_pic.png" 
              alt="Foto do Eman" 
              className="rounded-full shadow-lg max-w-sm w-full h-auto object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-6 left-6 z-10 flex items-center flex-nowrap" style={{ marginTop: '2%' }}>
        <img 
          src="files/Vetor baixo.png" 
          alt="Logo" 
          className="w-20 h-20 object-contain"
        />
        <span style={{ marginLeft: '10%'}} className="whitespace-nowrap">
          Change the language
        </span>
      </div> */}
    </div>
  );
};

export default WelcomeScreen;