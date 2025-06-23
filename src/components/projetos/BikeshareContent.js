import React from 'react';
import { getChatbotHeader, getImageTransformerDesafiosHeader, getTecnologiasHeader } from "../HeadersContent"

const BikeshareContent = () => {
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
                """<br /><br />Este projeto é uma atividade do curso de Ciência de Dados da plataforma Udacity. O projeto cria funções que filtram os dados por cidade, mês e dia da semana de acordo com a solicitação do usuário e retornam informações sobre estações de bicicletas, viagens e usuários. Para a manipulação dos dados, utilizei o DataFrame da biblioteca Pandas.
                <br /><br />Como o projeto se limitava ao script principal, sem trazer visualizações para futuras análises e como em paralelo eu estava aprendendo a ferramenta Power BI, tomei a iniciativa de criar um dashboard com algumas informações adicionais das tabelas.
                <br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                <a href="https://github.com/Eman-Tedias/Bikeshare" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>
                  Repositório do projeto no GitHub
                </a>
              </span>
            </code>
        </pre>
      </div>
      <div className="mt-6">
        <img 
          src="files/bikeshare.png"
          alt='Dashboard do Bikeshare'
          className="rounded-lg shadow-md max-w-full h-auto w-1/2"
        />
          <span style={{ fontSize: '0.7rem' }}>
            Para acessar o dashboard, acesse o link: <a href="https://app.powerbi.com/view?r=eyJrIjoiOGY5Nzc4NDUtMTg3NC00NDU2LWE5ZDEtNjRlNGEzYTY1YTEyIiwidCI6IjAxMGYyNTZiLWQ0ZGQtNGI0ZC1iZTEzLWIwNWZlM2VjYTk4NiJ9&pageName=ReportSectionff918ad31a06db0282dc" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>Dashboard do Bikeshare</a>
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
        <span className="text-gray-800">'</span><span className="text-white">numpy</span><span className="text-gray-800">'</span><span className="text-white">,</span>
        <span className="text-gray-800">'</span><span className="text-white">Google Maps API</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
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
"""<br /><br />Minhas maiores dificuldades foram manipular o gráfico em imagem SVG, que foi editado no Adobe Illustrator, e gerar as colunas de latitude e longitude na tabela, pois a única coluna de referência que eu tinha era a de endereço, e ela não continha CEP nem outras informações que facilitassem o uso das bibliotecas tradicionais de geocodificação em Python. Depois de tentar usar a API do Bing Maps e o Selenium, consegui resolver utilizando a API do Google Maps.
<br /><br />"""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default BikeshareContent;