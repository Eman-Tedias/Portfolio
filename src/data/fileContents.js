// fileContents.js
// Importações dos conteúdos dos projetos
import { getEmanContent } from '../components/projetos/EmanContent';
import { AutoMagicComplete } from '../components/AutoMagicComponent';
// import { getEstePortifolioContent } from '../components/projetos/EstePortifolioContent';
// import { getNaturaAnalyticsContent } from '../components/projetos/NaturaAnalyticsContent';
import TcctContent from '../components/projetos/TcctContent';
import ImageTransformerContent from '../components/projetos/ImageTransformerContent';
import WebscrappingContent from '../components/projetos/WebscrappingContent';
import RevisorIAContent from '../components/projetos/RevisorIAContent';

export const getFileContent = (fileName) => {
  const contents = {
    // Arquivo principal sobre você
    'Eman.md': getEmanContent(),

    // Projetos
    'AutoMagic.tsx': {
      content: <AutoMagicComplete />,
      language: 'typescript',
      type: 'component'
    },
    'revisor_ia.py': {
      content: <RevisorIAContent />,
      language: 'python',
      type: 'component'
    },
    // 'EstePortifolio.js': getEstePortifolioContent(),
    // 'natura_analytics.py': getNaturaAnalyticsContent(),
    'tcct_dev.ipynb': {
      content: <TcctContent />,
      language: 'python',
      type: 'component'
    },
    'adeque_imagens.py': {
      content: <ImageTransformerContent />,
      language: 'python',
      type: 'component'
    },
    'webscrapping.py': {
      content: <WebscrappingContent />,
      language: 'python',
      type: 'component'
    },
  };

  return contents[fileName] || { 
    content: '// Arquivo em construção...', 
    language: 'javascript',
    type: 'code'
  };
};