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

const ipynbIcon = (
  <img
    src={notebookIcon}
    alt="Notebook"
    style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: 'middle', marginBottom: '10%' }}
  />
);

export const personalFileStructure = [
  { name: 'SOBRE-MIM.md', type: 'file', icon: '📋' },
  {
    name: 'Projetos Pessoais',
    type: 'folder',
    children: [
      { name: 'chatbot_whatsapp.py', type: 'file', icon: pyIcon },
      { name: 'bikeshare.py', type: 'file', icon: pyIcon },
      { name: 'EstePortfolio.js', type: 'file', icon: jsIcon },
      { name: 'tcct_ia_pnl.ipynb', type: 'file', icon: ipynbIcon },
      { name: 'movie_rental.ipynb', type: 'file', icon: ipynbIcon },
    ]
  },
];