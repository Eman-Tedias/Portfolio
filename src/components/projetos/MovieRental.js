import React from 'react';
import { getChatbotHeader, getImageTransformerDesafiosHeader, getTecnologiasHeader } from "../HeadersContent"

const MovieRentalContent = () => {
  const chatbotContent = getChatbotHeader();
  const chatbotDesafiosContent = getImageTransformerDesafiosHeader();
  const chatbotTecnologiasHeader = getTecnologiasHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <span style={{ color: "#6A9955" }}>
          <code className={`language-${chatbotContent?.language || ''}`}>
            {chatbotContent?.content || ''}
          </code>
          </span>
        </pre>
      </div>
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """<br /><br />Este projeto é uma atividade do curso de Ciência de Dados da Udacity, com ênfase em leitura, tratamento e análise de dados utilizando SQL, a partir de um banco de dados fornecido pela própria Udacity. O principal objetivo do projeto é identificar e solucionar problemas nos dados, apresentando os resultados por meio de visualizações claras e informativas.
                <br /><br />Para isso, utilizei o PostgreSQL para carregar e consultar o banco de dados, filtrando as informações relevantes e exportando os resultados em arquivos CSV. Em seguida, utilizei a biblioteca Pandas para ler esses arquivos e plotly para gerar gráficos de visualização. A cada gráfico apresentado, inclui uma breve contextualização da proposta da análise.
                <br /><br />Adicionalmente, desenvolvi um dashboard interativo no Power BI para aprofundar a análise dos dados e apresentar visualizações complementares, além do que foi proposto originalmente no exercício. Embora essa atividade não fizesse parte dos requisitos do projeto, decidi incluí-la para ampliar as possibilidades de exploração e interpretação dos dados.
                <br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                <a href="https://github.com/Eman-Tedias/Udacity_movie_rental" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>
                  Repositório do projeto no GitHub
                </a>
              </span>
            </code>
        </pre>
      </div>
      <div className="mt-6">
        <img 
          src="files/movierental.png"
          alt='Dashboard do Bikeshare'
          className="rounded-lg shadow-md max-w-full h-auto w-1/2"
        />
        <span style={{ fontSize: '0.7rem' }}>
            Para acessar o dashboard, acesse o link: <a href="https://app.powerbi.com/view?r=eyJrIjoiODM0NzY3Y2YtZjJjMS00MmEwLTk5ZGUtOGI5NjQzMWEzYjU4IiwidCI6IjAxMGYyNTZiLWQ0ZGQtNGI0ZC1iZTEzLWIwNWZlM2VjYTk4NiJ9" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>Dashboard do Bikeshare</a>
        </span>
        <br />
        <span style={{ fontSize: '0.7rem' }}>
            Para visualizar os plots, acesse o Collab: <a href="https://colab.research.google.com/drive/1w9q7arMpzS65nwvxZv1XY9w3oNfS4f0f?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>Google Collab</a>
        </span>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${chatbotTecnologiasHeader?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {chatbotTecnologiasHeader?.content || ''}
            </span>
          </code>
        </pre>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
      <code>
        <span className="text-gray-800">tecnologias_utilizadas = {`{`}</span>
        {'\n\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'codigo':</span><span className="text-gray-800">'</span><span className="text-white">Python Flask</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'bibliotecas':</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">pandas</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">plotly</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-white" style={{marginLeft: '30px'}}>'ferramentas':</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">Adobe Illustrator</span><span className="text-gray-800">'</span><span className="text-white">,</span>
        <span className="text-gray-800">'</span><span className="text-white">Power BI</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-gray-800">{`}`}</span>
      </code>
    </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${chatbotDesafiosContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {chatbotDesafiosContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Descrição do projeto */}
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
"""<br /><br />A maior dificuldade foi gerar os gráficos em SVG, criados no programa Adobe Illustrator, e integrá-los no sistema do dashboard, utilizando as funcionalidades do Power BI.
<br /><br />"""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default MovieRentalContent;