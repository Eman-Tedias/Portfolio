import React from 'react';
import { getWebscrappingHeader, getImageTransformerDesafiosHeader, getImageTransformerInterfaceHeader, getImageTransformerTecnologiasHeader } from "../projetos/AutoMagicContent"

const WebscrappingContent = () => {
  const webscrappingContent = getWebscrappingHeader();
  const webscrappingDesafiosContent = getImageTransformerDesafiosHeader();
  const webscrappingInterfaceContent = getImageTransformerInterfaceHeader();
  const webscrappingTecnologiasContent = getImageTransformerTecnologiasHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <span style={{ color: "#6A9955" }}>
          <code className={`language-${webscrappingContent?.language || ''}`}>
            {webscrappingContent?.content || ''}
          </code>
          </span>
        </pre>
      </div>
      {/* Descrição do projeto */}
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """<br /><br />O "Webscrapping" é uma ferramenta desenvolvida na empresa Arizona Global para automatizar a busca por imagens a partir de links dinâmicos baseados em códigos variáveis, como SKUs. A interface permite ao usuário fazer o upload de um arquivo Excel contendo esses códigos ou inseri-los manualmente por meio de um campo de texto. A partir disso, o usuário fornece um link template que contém um marcador {}, indicando o ponto onde cada valor será inserido.
<br /><br />
• O usuário envia um arquivo Excel com os códigos ou os insere manualmente.
<br /><br />
• Ele fornece um link template que contém um marcador {}, indicando o ponto onde cada valor será inserido.
<br /><br />
• Além disso, o usuário pode selecionar a dimensão desejada e baixar apenas se atender esse critério.
<br /><br />
• O usuário pode adicionar outros links e dimensões, caso a imagem não seja encontrada no anterior.
<br /><br />
• O sistema busca as imagens correspondentes aos valores, substituindo o marcador {} por cada um.
<br /><br />
Meu papel foi criar toda a aplicação, a sua interface e realizar o deploy.<br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${webscrappingInterfaceContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {webscrappingInterfaceContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Imagem do matplotlib */}
      <div className="mt-6">
        <img 
          src="files/webscrapping_plot.png"
          alt='Exemplo de interface do Webscrapping'
          className="rounded-lg shadow-md max-w-full h-auto w-1/2"
        />
          <span style={{ fontSize: '0.7rem' }}>
            Sketch da interface gerada por IA.
          </span>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${webscrappingTecnologiasContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {webscrappingTecnologiasContent?.content || ''}
            </span>
          </code>
        </pre>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
      <code>
        <span className="text-gray-800">tecnologias_utilizadas = {`{`}</span>
        {'\n\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'backend:'</span><span className="text-gray-800">'</span><span className="text-white">Python Flask</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'frontend':</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">HTML</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">CSS</span><span className="text-gray-800">'</span><span className="text-gray-800">],</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'interface:'</span><span className="text-gray-800">'</span><span className="text-white">Figma</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'adicionais:'</span><span className="text-gray-800"> {`[`}</span>
        <span className="text-gray-800">'</span><span className="text-white">Bootstrap</span><span className="text-gray-800">'{`]`}</span>
        {'\n'}
        <span className="text-gray-800">{`}`}</span>
      </code>
    </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${webscrappingDesafiosContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {webscrappingDesafiosContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Descrição do projeto */}
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
"""<br /><br />A aplicação possui algumas regras de funcionamento para torná-la genérica, então o único desafio foi garantir a compreensão delas pelo usuário.
<br /><br />Outro desafio foi garantir que não houvesse distorção nas imagens ao aplicar as redimensões, para isso foi utilizado o mesmo procedimento da adição de margem.
<br /><br />Também gerar margens independente da cor do fundo, pegando as cores do primeiro pixel.<br /><br />"""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default WebscrappingContent;