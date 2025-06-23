import React from 'react';
import { VideoPlayer } from '../VideoPlayer';
import { getChatbotHeader, getImageTransformerDesafiosHeader, getTecnologiasHeader } from "../HeadersContent"

const Chatbot = () => {
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
                """<br /><br />O Chatbot com IA foi o meu primeiro projeto utilizando a API da OpenAI. O objetivo era criar uma automação capaz de receber mensagens de usuários via WhatsApp, interpretar o contexto dessas conversas por meio de instruções e fornecer informações de forma personalizada e eficiente.
                <br /><br />O desenvolvimento foi realizado com o framework Flask, facilitando a criação e o gerenciamento das rotas da aplicação.
                <br />Para tornar o ambiente local acessível externamente durante a fase de testes, utilizei a ferramenta ngrok, que permite expor rotas locais de forma segura e prática.
                <br /><br />A automação permite tornar as interações mais rápidas, inteligentes e escaláveis.
                <br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                <a href="https://github.com/Eman-Tedias/ai_chatbot/" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>
                  Repositório do projeto no GitHub
                </a>
              </span>
            </code>
        </pre>
      </div>
      <div>
        <VideoPlayer url="/files/chatbot.mp4" />
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
        <span className="text-white" style={{marginLeft: '30px'}}>'backend':</span><span className="text-gray-800">'</span><span className="text-white">Python Flask</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'bibliotecas':</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">OpenAI</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">Meta Whatsapp API</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-white" style={{marginLeft: '30px'}}>'ferramentas':</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">ngrok</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">Meta for Developers Interface</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
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
"""<br /><br />Como este foi o meu primeiro projeto envolvendo inteligência artificial, além de ter sido a primeira vez que trabalhei com requisições a APIs e integração entre duas plataformas, todo o processo foi bastante desafiador, principalmente porque, na época, eu não possuía experiência prévia com desenvolvimento em ambiente corporativo.
<br /><br />""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default Chatbot;