import React from 'react';
import { getVerificadorIAHeader, getImageTransformerDesafiosHeader, getImageTransformerInterfaceHeader, getTecnologiasHeader } from "../HeadersContent"

const RevisorIAContent = () => {
  const verificadorIAContent = getVerificadorIAHeader();
  const verificadorIADesafiosContent = getImageTransformerDesafiosHeader();
  const verificadorIAInterfaceContent = getImageTransformerInterfaceHeader();
  const verificadorIATecnologiasHeader = getTecnologiasHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <span style={{ color: "#6A9955" }}>
          <code className={`language-${verificadorIAContent?.language || ''}`}>
            {verificadorIAContent?.content || ''}
          </code>
          </span>
        </pre>
      </div>
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """<br /><br />O Verificador IA é uma solução baseada em inteligência artificial desenvolvida para automatizar a revisão de ofertas em folhetos de supermercado. Integrado a uma ferramenta interna de visualização e marcação, ele permite, por meio de um botão, acionar o processamento automático das ofertas. As marcações são então realizadas diretamente em cada item, utilizando a API da ferramenta.
                <br /><br />O meu papel no projeto foi construir o backend, incluindo a lógica de processamento, o envio e recebimento de dados via API, além de realizar testes com diferentes clientes. A solução foi desenvolvida em Python, utilizando a biblioteca Fitz para extração de imagens e textos dos PDFs, e a API da OpenAI para validação final das ofertas.
                <br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${verificadorIAInterfaceContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {verificadorIAInterfaceContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
<br /><div className="mt-6">
        <img 
          src="files/pipeline_revisor.png"
          alt='Pipeline do Revisor IA'
          className="rounded-lg shadow-md max-w-full h-auto w-4/5"
        />
      </div>
<div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
                """
<br /><br />
• O fluxo é iniciado quando o usuário aciona um botão na interface da ferramenta. Nesse momento, as informações do folheto são enviadas para o backend.
<br /><br />
• As informações do folheto, incluindo o arquivo PDF com a imagem do material, são obtidas por meio de uma API Gateway.
<br /><br />
• Utilizando a biblioteca fitz, são extraídas:
<br />  • Imagens das ofertas contidas no PDF, que são salvas em uma pasta separada, juntamente com suas coordenadas dentro da página.
<br />  • Dados textuais, também localizados no PDF, com as respectivas coordenadas de cada elemento textual.
<br /><br />
• Nos dados, cada item de oferta contém uma chave com a URL da imagem esperada. A imagem correspondente é buscada na pasta gerada a partir do PDF. Caso seja encontrada, a imagem da oferta é considerada correta.
<br /><br />
• A imagem da oferta recortada é enviada para uma IA, que realiza uma validação final. Isso garante a recuperação de dados que eventualmente não foram capturados durante o processamento inicial com a biblioteca fitz, especialmente informações que estejam presentes apenas visualmente.
<br /><br />
• Por fim, as coordenadas da imagem e o relatório de validação gerado pela IA são enviados à ferramenta de anotação. Lá, é feito um controle de qualidade visual, com um check verde (validação positiva) ou vermelho (validação negativa), conforme os dados sejam ou não validados corretamente pela IA.
<br /><br />
Meu papel no time de desenvolvimento foi o de auxiliar na criação da lógica do processamento, estruturar o payload de recebimento e envio para a API da ferramenta, além de realizar testes com diferentes clientes.<br /><br />"""
              </span>
            </code>
        </pre>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${verificadorIATecnologiasHeader?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {verificadorIATecnologiasHeader?.content || ''}
            </span>
          </code>
        </pre>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
      <code>
        <span className="text-gray-800">tecnologias_utilizadas = {`{`}</span>
        {'\n\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'backend:'</span><span className="text-gray-800">'</span><span className="text-white">Python Flask</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
        {'\n'}  
        <span className="text-white" style={{marginLeft: '30px'}}>'bibliotecas:'</span><span className="text-gray-800"> [</span>
        <span className="text-gray-800">'</span><span className="text-white">OpenAI</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">Fitz</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">OpenCV</span><span className="text-gray-800">'</span><span className="text-white">, </span>
        <span className="text-gray-800">'</span><span className="text-white">numpy</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span>
        {'\n'}
        <span className="text-gray-800">{`}`}</span>
      </code>
    </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${verificadorIADesafiosContent?.language || ''}`}>
            <span style={{ color: "#6A9955" }}>
            {verificadorIADesafiosContent?.content || ''}
            </span>
          </code>
        </pre>
      </div>
      {/* Descrição do projeto */}
      <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            <code>
              <span style={{ color: "#CE9178" }}>
"""<br /><br />A maior dificuldade foi garantir a captura precisa das coordenadas de texto e localizar corretamente as imagens correspondentes na comparação com as imagens da pasta, considerando que poderiam existir pequenas variações entre elas.
<br /><br />Além disso, a aplicação possui algumas regras de funcionamento para torná-la genérica, então o único desafio foi garantir a compreensão delas pelo usuário, tendo como auxilio a UI/UX.
<br /><br />""
              </span>
            </code>
          </pre>
      </div>
      <br /><br /><br />
    </div>
  )
}

export default RevisorIAContent;