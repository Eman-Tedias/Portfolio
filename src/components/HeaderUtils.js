// HeaderUtils.js
// Utilitário para criar headers padronizados e componentizados

/**
 * Cria um header com caracteres de borda e texto centralizado
 * @param {string} text - Texto a ser exibido no header
 * @param {string} borderChar - Caractere usado para a borda (ex: '=', '#')
 * @param {number} minWidth - Largura mínima do header (padrão: 40)
 * @param {number} padding - Espaçamento interno em cada lado do texto (padrão: 2)
 * @returns {object} Objeto com content e language para uso no portfólio
 */
export const createHeader = (text, borderChar = '=', minWidth = 40, padding = 2) => {
  const cleanText = text.trim().replace(/\s+/g, ' ');
  
  const textWidth = cleanText.length + (padding * 2);
  const headerWidth = Math.max(minWidth, textWidth);
  
  const totalPadding = headerWidth - cleanText.length;
  const leftPadding = Math.floor(totalPadding / 2);
  const rightPadding = totalPadding - leftPadding;
  
  const borderLine = borderChar.repeat(headerWidth);
  const textLine = ' '.repeat(leftPadding) + cleanText + ' '.repeat(rightPadding);
  
  return {
    content: `
${borderLine}
${textLine}
${borderLine}
`,
    language: 'typescript'
  };
};

/**
 * Cria um header simples com apenas uma linha de borda
 * @param {string} text - Texto a ser exibido
 * @param {string} borderChar - Caractere da borda
 * @param {number} minWidth - Largura mínima
 * @returns {object} Objeto com content e language
 */
export const createSimpleHeader = (text, borderChar = '=', minWidth = 40) => {
  const cleanText = text.trim().replace(/\s+/g, ' ');
  const headerWidth = Math.max(minWidth, cleanText.length + 4);
  const borderLine = borderChar.repeat(headerWidth);
  
  return {
    content: `
${borderLine}
${cleanText}
${borderLine}
`,
    language: 'typescript'
  };
};

/**
 * Cria um header com estilo de comentário
 * @param {string} text - Texto a ser exibido
 * @param {string} borderChar - Caractere da borda
 * @param {number} minWidth - Largura mínima
 * @returns {object} Objeto com content e language
 */
export const createCommentHeader = (text, borderChar = '#', minWidth = 40) => {
  const cleanText = text.trim().replace(/\s+/g, ' ');
  const headerWidth = Math.max(minWidth, cleanText.length + 4);
  
  const totalPadding = headerWidth - cleanText.length;
  const leftPadding = Math.floor(totalPadding / 2);
  const rightPadding = totalPadding - leftPadding;
  
  const borderLine = borderChar.repeat(headerWidth);
  const textLine = borderChar.repeat(leftPadding) + ' ' + cleanText + ' ' + borderChar.repeat(rightPadding);
  
  return {
    content: `
${borderLine}
${textLine}
${borderLine}
`,
    language: 'typescript'
  };
};