import { createHeader, createCommentHeader } from './HeaderUtils';

export const getAutoMagicMainHeader = () => {
  const headerContent = createHeader('DESDOBRADOR - FIGMA PLUGIN', '=', 40);
  
  return {
    content: `${headerContent.content}

O Desdobrador é um plugin desenvolvido para o Figma,
criado a partir da necessidade de usuários que produzem grandes volumes de peças estáticas e animadas. 
Ele permite gerar múltiplas versões de um mesmo layout, em diferentes 
formatos, com base em um template, automatizando a substituição de textos,
imagens e outros elementos a partir de uma base de dados fornecida. 
`,
    language: 'typescript'
  };
};

export const getPortifolioDescriptionHeader = () => {
  return createHeader('PORTIFOLIO DEV', '=', 40);
};

export const getAutoMagicDescriptionHeader = () => {
  return createHeader('DESDOBRA DE PEÇAS ESTÁTICAS', '=', 40);
};

export const getTecnologiasJsHeader = () => {
  return createHeader('TECNOLOGIAS UTILIZADAS', '=', 40);
};

export const getDificuldadesJsHeader = () => {
  return createHeader('MAIORES DESAFIOS', '=', 40);
};

export const getImageTransformerInterfaceHeader = () => {
  return createCommentHeader('Exemplo de Interface', '#', 40);
};

export const getMetodologiaHeader = () => {
  return createCommentHeader('Metodologia', '#', 40);
};

export const getImageTransformerHeader = () => {
  return createCommentHeader('Adeque Imagens', '#', 40);
};

export const getWebscrappingHeader = () => {
  return createCommentHeader('Webscrapping', '#', 40);
};

export const getChatbotHeader = () => {
  return createCommentHeader('Chatbot IA', '#', 40);
};


export const getTecnologiasHeader = () => {
  return createCommentHeader('Tecnologias Utilizadas', '#', 40);
};

export const getImageTransformerDesafiosHeader = () => {
  return createCommentHeader('Maiores desafios', '#', 40);
};

export const getTcctHeader = () => {
  return createCommentHeader('TCCT - IA/PNL', '#', 40);
};
