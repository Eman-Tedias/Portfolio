import React from 'react';
import { VideoPlayer } from '../VideoPlayer';
import { getAutoMagicMainHeader, getAutoMagicDescriptionHeader, getDificuldadesJsHeader, getTecnologiasJsHeader } from '../HeadersContent';

export const AutoMagicContent = () => {
  const autoMagicContent = getAutoMagicMainHeader();
  const autoMagicDescription = getAutoMagicDescriptionHeader();
  const autoMagicDesafios = getDificuldadesJsHeader();
  const autoMagicTecnologias = getTecnologiasJsHeader();

  return (
    <div className="space-y-8">
      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${autoMagicContent.language}`}>
            {autoMagicContent.content}
          </code>
        </pre>
      </div>
      
      <div>
        <VideoPlayer url="/files/AutoMagic.mp4" />
      </div>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${autoMagicDescription.language}`}>
            {autoMagicDescription.content}
          </code>
        </pre>
        <br />
        <div className='space-y-8 max-w-[50vw]'>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            A primeira versão do plugin já estava implementada, porém com uma interface e experiência do usuário bastante limitadas, o que resultava em uma adesão quase nula na utilização. A partir disso, assumi a responsabilidade por todas as melhorias e reestruturações da ferramenta, com suporte do time de Produto para a coleta de feedbacks e necessidades dos usuários e uma pessoa de UI/UX Design para criar as interfaces.
            Além da reformulação completa da interface e da experiência de uso, também foram desenvolvidos e incorporados novos recursos importantes, como:
          </pre>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            • Alteração de propriedades de instâncias de componente;
          </pre>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            • Tabela dinâmica com exibição dos dados e aplicação de filtros por colunas e valores;
          </pre>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            • Reprocessamento de peças já desdobradas, com base em IDs únicos para controle preciso;
          </pre>
          <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            Essas melhorias em conjunto com uma documentação detalhada dos recursos e regras resultaram em um maior engajamento e eficiência no uso do plugin, que hoje é utilizado em todos novos trabalhos por maior parte do time de diretores de arte.
            Em oito meses o, plugin proporcionou uma<span className="text-yellow-400"> redução de mais de 600 horas de trabalho, com um potencial de economia em folha maior que R$72.000,00</span>
          </pre>
        </div>
      </div>

      {/* 4. Tecnologias Utilizadas */}
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
        <code className={`language-${autoMagicTecnologias.language}`}>
            {autoMagicTecnologias.content}
        </code>
      </pre>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap">
        <code>
            <span className="text-gray-800">const tecnologiasUtilizadas = {`{`}</span>
            {'\n\n'}  <span className="text-white" style={{marginLeft: '30px'}}>Frontend: </span><span className="text-gray-800">'</span><span className="text-white">Typescript</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
            {'\n'}  <span className="text-white" style={{marginLeft: '30px'}}>Backend: </span><span className="text-gray-800">'</span><span className="text-white">Node</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
            {'\n'}  <span className="text-white" style={{marginLeft: '30px'}}>Bibliotecas: </span><span className="text-gray-800">[</span><span className="text-gray-800">'</span><span className="text-white">React</span><span className="text-gray-800">'</span><span className="text-white">, </span><span className="text-gray-800">'</span><span className="text-white">MUI</span><span className="text-gray-800">'</span><span className="text-white">, </span><span className="text-gray-800">'</span><span className="text-white">Python para rotas externas</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span><span className="text-gray-800">,</span>
            {'\n'}<span className="text-gray-800">{`}`}</span><span className="text-gray-800">;</span>
        </code>
      </pre>

      <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${autoMagicDesafios.language}`}>
            {autoMagicDesafios.content}
          </code>
        </pre>
        <br />
        <div className='space-y-8 max-w-[50vw]'>
            <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            Meu principal desafio foi o fato de o plugin representar minha primeira experiência com React e TypeScript, especialmente dentro de uma aplicação de grande porte e já estruturada. Isso exigiu um esforço significativo para compreender simultaneamente a base de código, a linguagem e o framework.
            <br />
            <br />
            Outro ponto desafiador foi a implementação da feature de desdobramento de peças animadas em HTML, que realizava uma requisição para uma rota externa responsável pelo processamento dos metadados do arquivo. O Figma, por questão de segurança, exige que todas as rotas externas utilizadas sejam declaradas previamente no manifest. Isso, no entanto, entrava em conflito com a funcionalidade de troca de imagens nas desdobras de peças estáticas, já que limitaríamos a escolha das imagens a domínios específicos, perdendo a flexibilidade de permitir que o usuário utilize qualquer imagem, de qualquer origem.
            <br />
            <br />
            Como alternativa, propus a criação de uma rota intermediária em Python, que recebia a imagem enviada, armazenava no nosso repositório em nuvem e retornava um link público acessível pela aplicação. Dessa forma, foi necessário incluir apenas essa única rota no manifest, mantendo a liberdade de escolha para o usuário.
            <br />
            <br />
            Também enfrentei limitações relacionadas à biblioteca DataGrid, que foi utilizada na interface, mas não oferecia flexibilidade suficiente para atender todas as demandas visuais e funcionais do projeto.
            <br />
            <br />
            Por fim, a integração da funcionalidade de alteração de instâncias de componentes exigiu uma mudança estrutural no código. Anteriormente, o sistema mapeava todos os nós do arquivo Figma e trabalhava diretamente com seus IDs. No entanto, ao alterar propriedades de uma instância, os nós internos são perdidos, exigindo um novo mapeamento. Para resolver isso, implementei uma abordagem recursiva que percorria e atualizava todos os nós filhos que também fossem componentes, antes de realizar alterações em textos, imagens e demais propriedades.
            </pre>
        </div>
      </div>
    </div>
  );
};