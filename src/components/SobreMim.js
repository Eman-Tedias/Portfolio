import React from 'react';

const age = new Date().getFullYear() - 1994;

const SobreMim = () => {

  return (
    <div className="space-y-8">
        <div className='space-y-8 max-w-[50vw]'>
            <br />
            <pre className='text-5xl font-bold leading-relaxed whitespace-pre-wrap'>
                ## EMANUEL
            </pre>
            <br />
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <img 
                src="files/Gramado.jpeg"
                alt='Exemplo de interface do Webscrapping'
                className="rounded-lg shadow-md max-w-full h-auto w-1/3"
                />
                <pre className='text-sm leading-relaxed whitespace-pre-wrap' style={{marginLeft: '10%'}}>
                    Meu nome é Emanuel, tenho {age} anos e moro em Jacareí, no interior de São Paulo, a cerca de uma hora e meia da capital. Sou formado em Cinema pela Universidade Federal de Pelotas, motivado desde pequeno pelo desejo de trabalhar com animação 2D.
            <br /><br />
                    Durante boa parte da minha carreira, atuei como autônomo com brand design e animação, incluindo a participação em um curta-metragem premiado. No período da pandemia, tive meu primeiro contato com Python, por meio de um curso do Gustavo Guanabara no YouTube, uma indicação de amigos. Acabei me interessando cada vez mais pela linguagem e pela lógica de programação, ao ponto de refletir sobre meus sonhos e decidir migrar para a área de dados.
                </pre>
            </div>
            <br />
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
                    Minha primeira oportunidade como desenvolvedor foi na Arizona, atuando no núcleo de inovação, criando projetos internos e para clientes envolvendo automação e produtos de dados. Também utilizei ferramentas de inteligência artificial generativa para automação com dados não estruturados, além de trabalhar com tecnologias e técnicas relacionadas, como assistentes e engenharia de prompt.
                    <br /><br />
                    Desde então, venho me especializando em ciência de dados e inteligência artificial, e sigo buscando maneiras de aplicar e aprofundar meus conhecimentos na prática.
                </pre>
                <img 
                src="files/Adobe Summit.jpeg"
                alt='Exemplo de interface do Webscrapping'
                className="rounded-lg shadow-md max-w-full h-auto w-1/2"
                style={{marginLeft: '10%'}}
                />
            </div>
                <br />
                <pre className='text-sm leading-relaxed whitespace-pre-wrap'>
                    Na vida pessoal, tenho interesse constante em aprender coisas novas, principalmente nas áreas de tecnologia, design e marketing. Desde a pandemia, também venho estudando mandarim, algo que se tornou um hobby. Sou gamer de longa data, e tenho gosto principalmente por jogos de estratégia e RPGs, especialmente aqueles com ambiente competitivo.
                <br /><br />
                    Além do digital, gosto de manter um estilo de vida ativo: pratico musculação e crossfit, e sigo uma rotina alimentar há vários anos para cuidar da saúde e do corpo. Socialmente, gosto de aproveitar festas, mas o que realmente me agrada é reunir amigos em casa para conversar, cantar no karaoke e jogar jogos de tabuleiro.
                </pre>
                <br /><br />
        </div>
    </div>
  )
}

export default SobreMim;