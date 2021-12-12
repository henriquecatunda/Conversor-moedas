import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyles from'./styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
