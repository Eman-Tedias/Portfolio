import React from 'react';
import { getTcctHeader, getImageTransformerDesafiosHeader, getMetodologiaHeader, getTecnologiasHeader } from "../HeadersContent"

const TcctContent = () => {
  const tcctHeader = getTcctHeader();
  const tcctDesafiosContent = getImageTransformerDesafiosHeader();
  const tcctMetodologiaContent = getMetodologiaHeader();
  const tcctTecnologiasHeader = getTecnologiasHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <span style={{ color: "#6A9955" }}>
          <code className={`language-${tcctHeader?.language || ''}`}>
            {tcctHeader?.content || ''}
          </code>
          </span>
        </pre>
      </div>
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """<br /><br />O objetivo deste trabalho foi investigar como ferramentas de Inteligência Artificial (IA) e Processamento de Linguagem Natural (PLN) podem ser aplicadas na identificação de elementos estéticos e narrativos de nostalgia em filmes, tendo como objeto de estudo o longa-metragem Toy Story 3 (2010).
                <br /><br />A motivação para utilizar IA surgiu durante a primeira etapa do projeto, quando enfrentei o desafio de analisar e cruzar em painel semântico mais de 60 elementos nostálgicos identificados na análise fílmica inicial. Diante da quantidade expressiva de dados, tornou-se necessário adotar uma abordagem metodológica que permitisse filtrar e selecionar uma amostra significativa desses elementos sem o viés de uma decisão inteiramente manual.
                <br /><br />Aproveitando minha experiência na área de desenvolvimento, decidi propor uma solução baseada na análise de dados através de comentários de usuários, complementada por requisições à API da OpenAI, para refinar e revisar as amostras. Assim, o foco do trabalho tornou-se a integração entre a análise tradicional fílmica e a aplicação de técnicas automatizadas de IA/PLN.
                <br /><br />Todos os processamentos foram feitos em um Jupyter Notebook.
                <br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                <a href="https://github.com/Eman-Tedias/TCCT" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>
                  Repositório do trabalho no GitHub
                </a>
              </span>
            </code>
        </pre>
      </div>
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${tcctMetodologiaContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {tcctMetodologiaContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
<br />
<div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """
<br /><br />
• Identificação de Cenas Nostálgicas no Filme:
<br />  - Realização de análise fílmica manual.
<br />  - Registro de cenas potencialmente nostálgicas com descrição e minutagem.
<br /><br />
• Análise do Roteiro do Filme:
<br />  - Obtenção do roteiro via Scriptslug.
<br />  - Divisão do roteiro em 12 partes, considerando contexto e tempo.
<br />  - Envio de cada trecho à requisição do modelo GPT-4o da OpenAI para detectar elementos nostálgicos.
<br /><br />
• Comparação entre Cenas e Roteiro:
<br />  - Cruzamento entre os dados da análise fílmica e do roteiro processado pela IA.
<br />  - Verificação de elementos adicionais não percebidos na análise manual.
<br /><br />
•  Agrupamento das informações textuais em cinco categorias temáticas através do ChatGPT:
<br />  - Elementos Icônicos e Referências Pop
<br />  - Infância, Crescimento e Despedida
<br />  - Vida dos Brinquedos: Abandono e Emoção
<br />  - Aventuras e Trabalho em Equipe
<br />  - O Mundo dos Brinquedos: Cenários e Metáforas
<br /><br />
• Coleta de Comentários de Espectadores:
<br />  - Extração de 890 comentários da base de dados IMDb via Kaggle.
<br /><br />
• Processamento dos Comentários:
<br />  - Análise individual dos comentários através de requisição à OpenAI para identificar menções nostálgicas e retornar os respectivos números.
<br />  - Geração de colunas temáticas em uma tabela final contendo o cruzamento de dados.
<br /><br />
• Geração de Rankings de Cenas/Elementos Nostálgicos através de um código Python.
<br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${tcctTecnologiasHeader?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {tcctTecnologiasHeader?.content || ''}
            </span>
          </code>
        </pre>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
      <code>
        <span className="text-gray-800">tecnologias_utilizadas = {`{`}</span>
        {'\n\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'linguagem:'</span><span className="text-gray-800">'</span><span className="text-white">Python</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'ferramentas:'</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">Jupyter Notebook</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">OpenAI API</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">Pandas</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">Google Docs</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-gray-800">{`}`}</span>
      </code>
    </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${tcctDesafiosContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {tcctDesafiosContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Descrição do projeto */}
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
"""<br /><br />Acredito que o maior desafio tenha sido apresentar o conceito para pessoas fora da área de tecnologia, como professores e colegas, através de uma linguagem acessível e menos técnica, para que pudessem compreender todas as etapas.
<br /><br />Também foi desafiador construir um prompt eficiente, utilizando técnicas de engenharia de prompt, que conseguisse revisar os comentários de forma precisa e minimizar as alucinações do modelo, evitando assim custos desnecessários.
<br /><br />"""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default TcctContent;