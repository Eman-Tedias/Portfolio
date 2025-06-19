// EstePortifolioContent.js
// Conteúdo para o arquivo EstePortifolio.js no portfólio VSCode

export const getEstePortifolioContent = () => {
  return {
    content: `// EstePortifolio.js
// 📱 Projeto do Portfólio VSCode

/*
Descrição deste portfólio:
- Tecnologias utilizadas (React, Tailwind, etc.)
- Conceito de simular o VSCode
- Funcionalidades implementadas
- Processo de desenvolvimento
*/

import React, { useState } from 'react';
import ActivityBar from './components/ActivityBar';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';

const VSCodePortfolio = () => {
  const [activeTab, setActiveTab] = useState('sobre-mim.md');
  
  // Seu conteúdo sobre este projeto de portfólio aqui
  
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Estrutura do VSCode simulado */}
      <ActivityBar />
      <Sidebar />
      {/* Mais componentes... */}
    </div>
  );
};

export default VSCodePortfolio;`,
    language: 'javascript'
  };
};