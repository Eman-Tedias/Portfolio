import pythonIcon from '../icons/python.svg';
import javascriptIcon from '../icons/javascript.svg';
import notebookIcon from '../icons/notebook.svg';
import reactIcon from '../icons/react.svg';

const jsIcon = (
  <img
    src={javascriptIcon}
    alt="JavaScript"
    style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
  />
);

const tsxIcon = (
  <img
    src={reactIcon}
    alt="React"
    style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
  />
);

const pyIcon = (
  <img
    src={pythonIcon}
    alt="Python"
    style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
  />
);


export const companyFileStructure = [
  {
    name: 'Projetos em Empresas',
    type: 'folder',
    children: [
      { name: 'DesdobradorFigma.tsx', type: 'file', icon: tsxIcon },
      { name: 'verificador_ia.py', type: 'file', icon: pyIcon },
      { name: 'adeque_imagens.py', type: 'file', icon: pyIcon },
      { name: 'webscrapping.py', type: 'file', icon: pyIcon },
    ]
  },
];