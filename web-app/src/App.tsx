import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Menu from './components/Menu';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <Router>
      <Menu />
      <Routes />
    </Router>
  </>
);

export default App;
