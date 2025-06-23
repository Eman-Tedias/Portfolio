// fileContents.js
// Importações dos conteúdos dos projetos
import { AutoMagicContent } from '../components/projetos/AutoMagicContent';
import SobreMim from '../components/SobreMim';
import EstePortfolioContent from '../components/projetos/EstePortfolioContent';
import MovieRentalContent from '../components/projetos/MovieRental';
import BikeshareContent from '../components/projetos/BikeshareContent';
import Chatbot from '../components/projetos/ChatbotContent';
import TcctContent from '../components/projetos/TcctContent';
import ImageTransformerContent from '../components/projetos/ImageTransformerContent';
import WebscrappingContent from '../components/projetos/WebscrappingContent';
import RevisorIAContent from '../components/projetos/RevisorIAContent';

export const getFileContent = (fileName) => {
  const contents = {
    // Arquivo principal sobre você
    'SOBRE-MIM.md': {
      content: <SobreMim />,
      language: 'markdown',
      type: 'component'
    },

    // Projetos
    'DesdobradorFigma.tsx': {
      content: <AutoMagicContent />,
      language: 'typescript',
      type: 'component'
    },
    'verificador_ia.py': {
      content: <RevisorIAContent />,
      language: 'python',
      type: 'component'
    },
    'bikeshare.py': {
      content: <BikeshareContent />,
      language: 'python',
      type: 'component'
    },
    'movie_rental.ipynb': {
      content: <MovieRentalContent />,
      language: 'python',
      type: 'component'
    },
    'EstePortfolio.js': {
      content: <EstePortfolioContent />,
      language: 'javascript',
      type: 'component'
    },
    'chatbot_whatsapp.py': {
      content: <Chatbot />,
      language: 'python',
      type: 'component'
    },
    'tcct_ia_pnl.ipynb': {
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