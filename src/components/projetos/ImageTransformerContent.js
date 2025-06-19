import React from 'react';
import { getImageTransformerHeader, getImageTransformerDesafiosHeader, getImageTransformerInterfaceHeader, getImageTransformerTecnologiasHeader } from "../projetos/AutoMagicContent"

const ImageTransformerContent = () => {
  const imageTransformerContent = getImageTransformerHeader();
  const imageTransformerDesafiosContent = getImageTransformerDesafiosHeader();
  const imageTransformerInterfaceContent = getImageTransformerInterfaceHeader();
  const imageTransformerTecnologiasContent = getImageTransformerTecnologiasHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <span style={{ color: "#6A9955" }}>
          <code className={`language-${imageTransformerContent?.language || ''}`}>
            {imageTransformerContent?.content || ''}
          </code>
          </span>
        </pre>
      </div>
      {/* Descrição do projeto */}
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """<br /><br />O "Adeque Imagens" é uma ferramenta interna para transformação de imagens desenvolvida na empresa Arizona Global, permitindo o processamento de múltiplas simultaneamente. Foi criado para atender o nosso time de criação e atendimento.
<br /><br />
Remover fundo: elimina o background da imagem utilizando a API do modelo RMBG-1.4 da BRIA AI.
<br /><br />
Centralizar imagem: reposiciona a imagem no centro do canvas, independente de onde esteja.
<br /><br />
Adicionar margem: insere margens ao redor da imagem, conforme valores inseridos pelo usuário, utilizando a cor do fundo.
<br /><br />
Redimensionar: permite definir manualmente altura e largura, caso mude a proporção, adiciona uma margem para complementar.
<br /><br />
Formato de saída: escolha a extensão do arquivo entre PNG e JPG.
<br /><br />
Tipo de cor: Converte a base de cores CMYK para RGB e vice-versa.
<br /><br />
Meu papel foi aprimorar o redimensionamento, para atender todos os cenários de uso e manter sua proporção, como remoção de fundo, adição de margem, etc.
Tambem implementei as funcionalidades de centralização e adição de margem, a escolha do modelo da remção de fundo, além de otimizar a consistência nos perfis de cores quando houvesse ou não conversão.
Além disso, também aperfeiçoei a interface do usuário, tentando não deixa-la muito poluída com tantos processamentos.<br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${imageTransformerInterfaceContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {imageTransformerInterfaceContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Imagem do matplotlib */}
      <div className="mt-6">
        <img 
          src="/files/matplotlib_plot.png" 
          alt="Exemplo de transformação de imagem usando matplotlib"
          className="rounded-lg shadow-md max-w-full h-auto w-1/2"
        />
          <span style={{ fontSize: '0.7rem' }}>
            Sketch da interface gerada por IA.
          </span>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${imageTransformerTecnologiasContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {imageTransformerTecnologiasContent?.content || ''}
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
        <span className="text-white" style={{marginLeft: '30px'}}>'adicionais:'</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">Bootstrap</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">OpenCV</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">numpy</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-gray-800">{`}`}</span>
      </code>
    </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${imageTransformerDesafiosContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {imageTransformerDesafiosContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Descrição do projeto */}
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
"""<br /><br />O maior desafio foi encontrar uma API gratuita de remoção de fundo que atendesse às necessidades do usuário, acabei encontrando a API do BRIA AI na plataforma Hugging Face.
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

export default ImageTransformerContent;