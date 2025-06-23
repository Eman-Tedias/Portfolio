import React from 'react';
import { getDificuldadesJsHeader, getTecnologiasJsHeader, getPortifolioDescriptionHeader } from '../HeadersContent';

const EstePortifolioContent = () => {
  const portifolioDesafios = getDificuldadesJsHeader();
  const portifolioTecnologias = getTecnologiasJsHeader();
  const portifolioDescription = getPortifolioDescriptionHeader();

  return (
      <div className="space-y-8">
        <div>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${portifolioDescription.language}`}>
            {portifolioDescription.content}
          </code>
        </pre>
      </div>
        <div>
          <br />
          <div className='space-y-8 max-w-[50vw]'>
            <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
            Com o objetivo de criar um repositório visual e interativo para apresentar meus projetos, desenvolvi este portfólio utilizando React e Tailwind CSS.
            <br />Meu intuito era construir um website com uma interface atrativa para profissionais da área de desenvolvimento, sem deixar de lado a navegação intuitiva e a fácil leitura para visitantes sem conhecimento técnico, mas que desejam saber mais sobre mim e meus trabalhos.
            <br /><br />A partir dessa ideia, decidi criar uma interface que simula o ambiente do VSCode, incorporando seus componentes interativos e elementos textuais,proporcionando ao usuário a sensação de estar navegando em um repositório local.
            <br />Optei pelo React na construção do site devido à minha experiência prévia com essa biblioteca e por ela oferecer maior eficiência na criação de componentes reutilizáveis e dinâmicos, fator importante considerando que cada página de projeto segue um padrão estrutural baseado na simulação de arquivos de código.
            <br /><br />
            <code>
              <span style={{ color: "#CE9178" }}>
                <a href="https://github.com/Eman-Tedias/portifolio" target="_blank" rel="noopener noreferrer" style={{ color: "#569CD6", textDecoration: "underline" }}>
                  Repositório do projeto no GitHub
                </a>
              </span>
            </code>
            </pre>
          </div>
        </div>
  
        {/* 4. Tecnologias Utilizadas */}
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code className={`language-${portifolioTecnologias.language}`}>
              {portifolioTecnologias.content}
          </code>
        </pre>
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          <code>
              <span className="text-gray-800">const tecnologiasUtilizadas = {`{`}</span>
              {'\n'}  <span className="text-white" style={{marginLeft: '30px'}}>Linguagem: </span><span className="text-gray-800">'</span><span className="text-white">Javascript</span><span className="text-gray-800">'</span><span className="text-gray-800">,</span>
              {'\n'}  <span className="text-white" style={{marginLeft: '30px'}}>Bibliotecas: </span><span className="text-gray-800">[</span><span className="text-gray-800">'</span><span className="text-white">React</span><span className="text-gray-800">'</span><span className="text-white">, </span><span className="text-gray-800">'</span><span className="text-white">Tailwind CSS</span><span className="text-gray-800">'</span><span className="text-gray-800">]</span><span className="text-gray-800">,</span>
              {'\n'}<span className="text-gray-800">{`}`}</span><span className="text-gray-800">;</span>
          </code>
        </pre>
  
        <div>
          <pre className="text-sm leading-relaxed whitespace-pre-wrap">
            <code className={`language-${portifolioDesafios.language}`}>
              {portifolioDesafios.content}
            </code>
          </pre>
          <br />
          <div className='space-y-8 max-w-[50vw]'>
              <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
              Acredito que o desafio seja oferecer uma experiência de usuário atraente e intuitiva, para quem é ou não desenvolvedor.
              <br />
              </pre>
          </div>
        </div>
      </div>
  );
}

export default EstePortifolioContent;